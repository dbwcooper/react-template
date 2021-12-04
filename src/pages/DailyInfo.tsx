import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { parse } from 'query-string';
import { Spin } from 'antd';
import { getTimeFormat } from '@utils/Utils';
import Topbar from '@components/topbar';
import routePath from '@utils/RouterPath';
import { getDailyInfo } from '@services/index';
import { IBoard } from '@pages/Type';

export default function DailyInfo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setDaily] = useState<IBoard>({} as IBoard);
  useEffect(() => {
    setLoading(true);
    const params = parse(window.location.search) as any;
    getDailyInfo(params)
      .then((data) => {
        setDaily(data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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

        <div>{data.title}</div>
        <div className='cursor-pointer underline'>退出</div>
      </Topbar>
      <div className='pt-28 px-6 mx-12 bg-white min-h-screen'>
        <h3 className='flex justify-between text-2xl'>
          <span>{data.title}</span>
          <span>{getTimeFormat(data.created_at)}</span>
        </h3>
        <pre className='pt-8 mx-0 px-0'>
          <div>{data.content}</div>
        </pre>
      </div>
    </Spin>
  );
}
