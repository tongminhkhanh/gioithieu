
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoCard from './components/InfoCard';
import { 
  BookOpen, 
  MapPin, 
  Target, 
  Eye, 
  Heart, 
  History, 
  Users, 
  Building2, 
  Facebook, 
  Phone 
} from 'lucide-react';

const App: React.FC = () => {
  const points = [
    { name: 'Trụ sở chính', location: 'Tiểu khu I, xã Mường La, tỉnh Sơn La.' },
    { name: 'Điểm trường Nà Nong', location: 'Bản Nà Nong, xã Mường La, tỉnh Sơn La.' },
    { name: 'Điểm trường Phiêng Tìn', location: 'Tiểu khu Phiêng Tìn, xã Mường La, tỉnh Sơn La.' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />

      {/* Section: Thông tin chung */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
              Thông tin chung
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-4 text-red-600 uppercase">Vị trí & Cơ sở</h3>
                    <div className="space-y-4">
                      {points.map((pt, idx) => (
                        <div key={idx} className="border-l-4 border-red-500 pl-4 py-1">
                          <p className="font-semibold text-gray-800">{pt.name}</p>
                          <p className="text-gray-600 text-sm">{pt.location}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]">
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="Hoạt động trường" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Sứ mệnh - Tầm nhìn */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <InfoCard 
              variant="red"
              icon={<Target className="text-red-600" />}
              title="Sứ mệnh"
              content="Xây dựng môi trường học tập có nền nếp, kỷ luật, trách nhiệm, văn minh và chất lượng tốt để mỗi học sinh đều có cơ hội phát triển tài năng và tư duy sáng tạo."
            />
            <InfoCard 
              variant="blue"
              icon={<Eye className="text-blue-600" />}
              title="Tầm nhìn"
              content="Là một trong những trường tiểu học chất lượng trên địa bàn huyện Mường La mà học sinh sẽ lựa chọn để học tập và rèn luyện, nơi giáo viên và học sinh luôn có khát vọng vươn lên."
            />
            <InfoCard 
              variant="white"
              icon={<Heart className="text-pink-600" />}
              title="Giá trị cốt lõi"
              content="Đoàn kết, chia sẻ, nhân ái, trung thực; Kỷ cương, nền nếp, văn minh; Sáng tạo, chủ động, thích ứng; Hội nhập, khát vọng vươn lên."
            />
          </div>
        </div>
      </section>

      {/* Section: Lịch sử */}
      <section id="history" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/2">
                <div className="relative p-2 bg-gradient-to-tr from-red-500 to-yellow-500 rounded-[2rem] shadow-2xl overflow-hidden group">
                  <img 
                    src="https://picsum.photos/id/42/800/600" 
                    alt="Khai giảng" 
                    className="rounded-[1.8rem] w-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
             </div>
             <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-3 text-red-600 mb-2">
                  <History size={32} />
                  <h2 className="text-3xl font-bold uppercase">Quá trình hình thành</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Trường Tiểu học Ít Ong được thành lập từ <strong>năm 2018</strong> trên cơ sở sáp nhập từ các đơn vị trường: TH Ít Ong A, TH Ít Ong B và TH Sông Đà (theo Quyết định số 1467/QĐ-UBND ngày 10/8/2018 của UBND huyện Mường La cũ).
                  </p>
                  <p>
                    Nhà trường liên tục đạt danh hiệu <strong>"Tập thể lao động tiên tiến"</strong>, 3 năm đạt danh hiệu <strong>"Tập thể lao động xuất sắc"</strong>, được Chủ tịch UBND tỉnh tặng bằng khen năm 2023 và Cờ thi đua năm 2023.
                  </p>
                  <p>
                    Năm 2025, trường đề nghị Chủ tịch UBND tỉnh tặng <strong>"Cờ thi đua"</strong>. Nhiều thầy cô giáo được công nhận là Giáo viên dạy giỏi cấp tỉnh, huyện và danh hiệu Chiến sỹ thi đua các cấp.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Section: Đội ngũ */}
      <section id="staff" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">Đội ngũ cán bộ, giáo viên</h2>
            <p className="text-red-100 max-w-2xl mx-auto">
              Tính đến tháng 8/2025, nhà trường có tổng số 74 cán bộ quản lý, giáo viên, nhân viên. 
              100% đạt chuẩn nghề nghiệp theo quy định của Bộ Giáo dục và Đào tạo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-110">
              <span className="text-4xl font-black block mb-2">03</span>
              <span className="text-red-100 text-sm font-semibold uppercase tracking-wider">Cán bộ quản lý</span>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-110">
              <span className="text-4xl font-black block mb-2">66</span>
              <span className="text-red-100 text-sm font-semibold uppercase tracking-wider">Giáo viên</span>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-110">
              <span className="text-4xl font-black block mb-2">01</span>
              <span className="text-red-100 text-sm font-semibold uppercase tracking-wider">Hành chính</span>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm transition-transform hover:scale-110">
              <span className="text-4xl font-black block mb-2">04</span>
              <span className="text-red-100 text-sm font-semibold uppercase tracking-wider">Lao động hợp đồng</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Cơ sở vật chất */}
      <section id="facilities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
           <div className="flex items-center gap-3 text-red-600 mb-12 justify-center">
              <Building2 size={32} />
              <h2 className="text-3xl font-bold uppercase">Cơ sở vật chất</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
               <div className="bg-gray-50 p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white border border-transparent hover:border-red-100 cursor-default">
                  <h4 className="font-bold text-gray-800 mb-2">Điểm trung tâm</h4>
                  <p className="text-2xl font-bold text-red-600">7.505 m²</p>
                  <p className="text-gray-500 text-sm">8,91 m²/học sinh</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white border border-transparent hover:border-red-100 cursor-default">
                  <h4 className="font-bold text-gray-800 mb-2">Điểm Nà Nong</h4>
                  <p className="text-2xl font-bold text-red-600">3.547 m²</p>
                  <p className="text-gray-500 text-sm">11,36 m²/học sinh</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white border border-transparent hover:border-red-100 cursor-default">
                  <h4 className="font-bold text-gray-800 mb-2">Điểm Phiêng Tìn</h4>
                  <p className="text-2xl font-bold text-red-600">2.240 m²</p>
                  <p className="text-gray-500 text-sm">28,71 m²/học sinh</p>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-100 transition-all hover:shadow-md hover:scale-[1.01]">
                     <div className="flex gap-4 items-start">
                        <BookOpen className="text-green-600 shrink-0 mt-1" />
                        <div>
                           <h4 className="font-bold text-green-800 mb-2">Môi trường giáo dục</h4>
                           <p className="text-gray-700 text-sm leading-relaxed">
                              Hệ thống CSVC đáp ứng tương đối đầy đủ các yêu cầu dạy và học theo Chương trình GDPT 2018. 
                              Trường có khuôn viên xanh, thư viện, khu vệ sinh sạch sẽ, hệ thống nước sạch và sân bãi rộng rãi.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100 transition-all hover:shadow-md hover:scale-[1.01]">
                     <div className="flex gap-4 items-start">
                        <Heart className="text-yellow-600 shrink-0 mt-1" />
                        <div>
                           <h4 className="font-bold text-yellow-800 mb-2">Thiết bị dạy học</h4>
                           <p className="text-gray-700 text-sm leading-relaxed">
                              Đồ dùng dạy học phục vụ cho việc dạy học của giáo viên và học sinh cơ bản đã đáp ứng nhu cầu 
                              tìm hiểu, học tập của cán bộ, giáo viên, nhân viên và học sinh.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <img src="https://picsum.photos/id/119/400/300" className="rounded-xl w-full h-40 object-cover shadow-md transition-transform hover:scale-105" alt="Thư viện" />
                  <img src="https://picsum.photos/id/120/400/300" className="rounded-xl w-full h-40 object-cover shadow-md transition-transform hover:scale-105" alt="Lớp học" />
                  <img src="https://picsum.photos/id/122/400/300" className="rounded-xl w-full h-40 object-cover shadow-md transition-transform hover:scale-105" alt="Sân chơi" />
                  <img src="https://picsum.photos/id/123/400/300" className="rounded-xl w-full h-40 object-cover shadow-md transition-transform hover:scale-105" alt="Khuôn viên" />
               </div>
            </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 pb-12 mb-12">
              <div className="text-center md:text-left">
                 <h2 className="text-2xl font-bold mb-2 uppercase">Trường Tiểu học Ít Ong</h2>
                 <p className="text-gray-400">Xã Mường La, Tỉnh Sơn La</p>
              </div>
              <div className="flex gap-6">
                 <a href="#" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                    <Facebook size={24} />
                    <span className="hidden sm:inline">Trường tiểu học Ít Ong, xã Mường La</span>
                 </a>
                 <div className="flex items-center gap-2">
                    <Phone size={24} className="text-red-500" />
                    <span>0845 161 886</span>
                 </div>
              </div>
           </div>
           <div className="text-center text-gray-500 text-sm">
              <p>&copy; 2025 Trường Tiểu học Ít Ong. Tất cả quyền được bảo lưu.</p>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
