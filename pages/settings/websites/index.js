import AppLayout from 'components/layout/AppLayout';
import SettingsLayout from 'components/layout/SettingsLayout';
import WebsitesList from 'components/pages/settings/websites/WebsitesList';
import useMessages from 'hooks/useMessages';

export default function WebsitesPage({ disabled }) {
  console.log('rendering WebsitesPage');
  const { formatMessage, labels } = useMessages();
  if (disabled) {
    return null;
  }

  console.log('website page below disabled');

  return (
    <AppLayout title={`${formatMessage(labels.settings)} - ${formatMessage(labels.websites)}`}>
      <SettingsLayout>
        <WebsitesList />
      </SettingsLayout>
    </AppLayout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      disabled: !!process.env.CLOUD_MODE,
    },
  };
}
