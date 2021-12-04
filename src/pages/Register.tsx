import { useState, FormEvent } from 'react';
import { Spin } from 'antd';
import Button from '@components/button';
import Input from '@components/input';
import Topbar from '@components/topbar';
import png from '@img/girl-icon.png';
import { postRegister, IUserRegister } from '@services/index';
import { goPage } from '@utils/Utils';
import routePath from '@utils/RouterPath';

export default function App() {
  const [user, setUser] = useState<IUserRegister>({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    postRegister(user)
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          document.cookie = `token=${data.token}`;
          goPage(routePath.dashboard);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Spin spinning={loading}>
      <Topbar>
        <div className='text-center w-full'>注册</div>
      </Topbar>
      <form
        className='w-4/12 mt-20 mb-8 px-12 py-8 mx-auto bg-white'
        onSubmit={onSubmit}
      >
        <div className='flex justify-center p-8'>
          <img className='w-1/3' src={png} alt='' />
        </div>

        {isError ? (
          <div className='text-red-500 text-sm pt-1 pb-4 text-center'>
            账号注册失败
          </div>
        ) : null}

        <div className='pb-8'>
          <div className='pb-4 font-light'>名字</div>
          <Input
            value={user.name}
            onChange={(e) => {
              let str = e.target.value;
              setUser((d) => ({ ...d, name: str }));
            }}
            className='min-w-full font-light'
            placeholder='名字...'
          />
        </div>

        <div className='pb-8'>
          <div className='pb-4 font-light'>邮件地址</div>
          <Input
            value={user.email}
            onChange={(e) => {
              let str = e.target.value;
              setUser((d) => ({ ...d, email: str }));
            }}
            className='min-w-full font-light'
            placeholder='邮件地址...'
          />
        </div>

        <div className='pb-8'>
          <div className='pb-4 font-light'>密码</div>
          <Input
            value={user.password}
            onChange={(e) => {
              let str = e.target.value;
              setUser((d) => ({ ...d, password: str }));
            }}
            className='min-w-full font-light'
            type='password'
            placeholder='密码...'
          />
        </div>
        <div className='flex justify-center flex-col items-center'>
          <Button>注册</Button>
          <a
            href={routePath.login}
            className='min-w-full text-center pt-4 hover:underline hover:cursor-pointer'
          >
            已有账号？去登录
          </a>
        </div>
      </form>
    </Spin>
  );
}
