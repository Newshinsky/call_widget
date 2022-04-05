import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { SimpleCard } from '../../components/simple-card/simple-card';

export const NotFoundPage: FC = () => {
    const { t } = useTranslation('not-found-page');

    return <SimpleCard title={t('title')}>
        {t('description')}
    </SimpleCard>;
};
