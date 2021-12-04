import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Divider, Row, Col, Skeleton, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import Topbar from '@components/topbar';
import { logout, getTimeFormat } from '@utils/Utils';
import routePath from '@utils/RouterPath';
import { getPostsList } from '@services/index';
import { useUserInfo } from '@data/index';
import { IBoard } from '@pages/Type';

function BoardNew() {
  let navigate = useNavigate();
  return (
    <Card
      hoverable
      onClick={() => navigate(routePath.daily)}
      className='h-52 cursor-pointer flex items-center justify-center font-light bg-white'
    >
      <div title='新建' className='text-7xl pb-2'>
        +
      </div>
    </Card>
  );
}

function Board(props: IBoard) {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      onClick={() => {
        navigate(`${routePath.dailyInfo}?id=${props.id}`);
      }}
      className='h-52 cursor-pointer font-light bg-white'
    >
      <div className='text-right pb-10'>{getTimeFormat(props.created_at)}</div>
      <div className='text-2xl text-center leading-10'>{props.title}</div>
    </Card>
  );
}

export default function Dashboard() {
  const { isLoading: userLoading, data: user } = useUserInfo();
  const navigate = useNavigate();

  const [pageIndex, setPage] = useState(0);
  const [listLoading, setLoading] = useState(false);
  const [data, setData] = useState<IBoard[]>([]);
  const [hasMore, setHasMore] = useState(true);


  const loading = userLoading;
  const loadMore = () => {
    if (listLoading) {
      return;
    }
    setLoading(true);
    getPostsList({ page: pageIndex + 1, count: 5 })
      .then((body) => {
        if (body?.length === 0) {
          // no more data
          setHasMore(false);
        } else {
          setHasMore(true);
          setData([...data, ...body]);
          setLoading(false);
          setPage(pageIndex + 1);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <Spin spinning={loading}>
      <div className='my-12 '>
        <Topbar>
          <div
            className='cursor-pointer underline'
            onClick={() => {
              navigate(routePath.dashboard);
            }}
          >
            {user?.name}
          </div>
          <div>我的日记</div>
          <div
            className='cursor-pointer underline'
            onClick={() => logout(routePath.login)}
          >
            退出
          </div>
        </Topbar>
        <InfiniteScroll
          dataLength={data.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Skeleton paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>无更多日记</Divider>}
          scrollableTarget='scrollableDiv'
        >
          <Row gutter={[16, 16]} className='p-12'>
            <Col className='gutter-row' span={8}>
              <BoardNew />
            </Col>
            {data.map((item: any) => (
              <Col className='gutter-row' span={8}>
                <Board key={item.id} {...item} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </div>
    </Spin>
  );
}
