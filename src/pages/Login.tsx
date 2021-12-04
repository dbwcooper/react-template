import { useState, FormEvent } from 'react';
import { Spin } from 'antd';
import Button from '@components/button';
import Input from '@components/input';
import Topbar from '@components/topbar';
import png from '@img/girl-icon.png';
import { postLogin, IUserLogin } from '@services/index';
import { goPage, setToken } from '@utils/Utils';
import routePath from '@utils/RouterPath';

export default function App() {
  const [user, setUser] = useState<IUserLogin>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    postLogin(user)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('error');
        }
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          setToken(data.token);
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
        <div className='text-center w-full'>登录</div>
      </Topbar>
      <form
        className='w-4/12 mt-20 mb-8 px-12 py-8 mx-auto bg-white'
        onSubmit={onSubmit}
      >
        <div className='flex justify-center py-8 '>
          <img className='w-1/3' src={png} alt='' />
        </div>
        {isError ? (
          <div className='text-red-500 text-sm pt-1 pb-4 text-center'>
            账号或密码错误
          </div>
        ) : null}

        <div className='pb-8'>
          <div className='pb-4 font-light text-2xl'>邮件地址</div>
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
          <div className='pb-4 font-light text-2xl'>密码</div>
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
          <Button>登录</Button>
          <a
            href={routePath.register}
            className='min-w-full text-center pt-4 hover:underline hover:cursor-pointer'
          >
            没有账号？注册
          </a>
        </div>
      </form>
    </Spin>
  );
}
