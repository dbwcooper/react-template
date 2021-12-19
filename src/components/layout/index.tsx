export default function Layout() {
  return (
    <div className='flex min-h-screen'>
      <nav className='px-4 py-8 border-r'>
        <ul>
          <li className='py-4'>menu1</li>
          <li className='py-4'>menu2</li>
          <li className='py-4'>menu3</li>
        </ul>
      </nav>
      <div className='flex-auto p-8'>container</div>
    </div>
  );
}
