import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import "./css/SidebarOptions.css"


function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://www.mooc.org/hubfs/history.jpg"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/13_Famous_Business_Leaders_You_Must_Follow_in_2022.jpg"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5913926/og_image/optimized/color-psychology-4d9939eb42de9733917920887b544b71.png"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://capian.co/assets/images/uploads/blog/ckia8-music-lockdown-1fa0fb8b.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.nist.gov/sites/default/files/styles/2800_x_2800_limit/public/images/2023/01/06/YOS.png?itok=ClX4_fCu"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.cflowapps.com/wp-content/uploads/2023/02/bpm_helthcre.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://media.licdn.com/dms/image/D4D12AQGIJyoQxVHAvw/article-cover_image-shrink_720_1280/0/1684763753506?e=2147483647&v=beta&t=WSjP6GphesKa1Q0RkQpVLA-7pm0Rz-1my76_ymt-1kI"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.shiksha.com/mediadata/shikshaOnline/mailers/2021/naukri-learning/oct/27oct-v3/education.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddIcon />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions