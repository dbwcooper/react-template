import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, message } from 'antd';
import Button from '@components/button';
import Input from '@components/input';
import Topbar from '@components/topbar';
import routePath from '@utils/RouterPath';
import { postDaily } from '@services/index';

export default function Daily() {
  const navigate = useNavigate();
  const [diary, setDiary] = useState({
    title: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    postDaily(diary)
      .then((res) => res.json())
      .then(() => {
        message.success('提交成功');
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Spin spinning={loading}>
      <Topbar>
        <div
          onClick={() => {
            navigate(routePath.dashboard);
          }}
          className='cursor-pointer underline'
        >
          退回
        </div>
        <div>新日记条目</div>
        <div className='cursor-pointer underline'>退出</div>
      </Topbar>
      <form onSubmit={onSubmit} className='mx-16 py-24 min-h-screen bg-white'>
        {isError ? (
          <div className='text-red-500 mb-8 text-center'>创建帖子时出错！</div>
        ) : null}
        <div className='px-8 pb-8'>
          <div className='pb-4 font-light text-2xl'>标题</div>
          <Input
            className='min-w-full font-light'
            placeholder='日记条目标题...'
            onChange={(e) => {
              let str = e.target.value;
              setDiary((d) => ({ ...d, title: str }));
            }}
          />
        </div>
        <div className='px-8 pb-8'>
          <div className='pb-4 font-light text-2xl'>内容</div>
          <Input.TextArea
            onChange={(e) => {
              let str = e.target.value;
              setDiary((d) => ({ ...d, content: str }));
            }}
            className='min-w-full font-light h-64 pt-1 '
            type='password'
            placeholder='日记条目内容...'
          />
        </div>
        <div className='text-right px-8'>
          <Button>提交</Button>
        </div>
      </form>
    </Spin>
  );
}
