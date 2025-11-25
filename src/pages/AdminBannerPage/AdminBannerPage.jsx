import React from 'react'
import BannersList from '../../components/admin/banner/BannersList'
import { useGetAllBannersQuery } from '../../redux/banner/bannerApi';
import AdminLayout from '../../components/AdminLayout';
const AdminBannerPage = () => {
    const { data } = useGetAllBannersQuery();
    const banners = data?.banners || []
    return (
        <AdminLayout>
            <BannersList banners={banners} />
        </AdminLayout>
    )
}

export default AdminBannerPage
