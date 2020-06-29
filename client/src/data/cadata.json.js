/**
 * Customers
 */
 const customers = [
    {
      id: 1,
      first_name: 'Phillie',
      last_name: 'Anear',
      email: 'panear0@jalbum.net',
      active: 0,
      account_manager_id: 1,
      reason_for_joining: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      created_date: '2018-10-02 04:36:15'
    },
    {
      id: 2,
      first_name: 'Elsy',
      last_name: 'Ben-Aharon',
      email: 'ebenaharon1@symantec.com',
      active: 1,
      account_manager_id: 3,
      reason_for_joining: 'Nulla tellus.',
      created_date: '2019-06-03 13:36:20'
    },
    {
      id: 3,
      first_name: 'Esma',
      last_name: 'Salters',
      email: 'esalters2@themeforest.net',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: null,
      created_date: '2019-02-24 01:43:16'
    },
    {
      id: 4,
      first_name: 'Averil',
      last_name: 'Seniour',
      email: 'aseniour3@tumblr.com',
      active: 1,
      account_manager_id: 4,
      reason_for_joining: null,
      created_date: '2019-01-28 03:19:22'
    },
    {
      id: 5,
      first_name: 'Junia',
      last_name: 'Rossin',
      email: 'jrossin4@w3.org',
      active: 0,
      account_manager_id: 1,
      reason_for_joining: 'Proin risus. Praesent lectus.',
      created_date: '2019-05-14 14:22:23'
    },
    {
      id: 6,
      first_name: 'Glennie',
      last_name: 'Weekland',
      email: 'gweekland5@github.io',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: null,
      created_date: '2018-11-16 03:00:47'
    },
    {
      id: 7,
      first_name: 'Friederike',
      last_name: 'Steventon',
      email: 'fsteventon6@ebay.co.uk',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      created_date: '2018-07-08 06:37:14'
    },
    {
      id: 8,
      first_name: 'Claudianus',
      last_name: 'Gluyus',
      email: 'cgluyus7@netlog.com',
      active: 0,
      account_manager_id: 2,
      reason_for_joining:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      created_date: '2019-01-14 00:34:38'
    },
    {
      id: 9,
      first_name: 'Kristoffer',
      last_name: 'De Micoli',
      email: 'kdemicoli8@bbb.org',
      active: 0,
      account_manager_id: 1,
      reason_for_joining:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
      created_date: '2019-06-10 06:43:16'
    },
    {
      id: 10,
      first_name: 'Patsy',
      last_name: 'Reynault',
      email: 'preynault9@netscape.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      created_date: '2018-10-02 18:09:11'
    },
    {
      id: 11,
      first_name: 'Barbabas',
      last_name: 'Rounsivall',
      email: 'brounsivalla@yellowpages.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: 'Integer tincidunt ante vel ipsum.',
      created_date: '2018-10-10 10:52:13'
    },
    {
      id: 12,
      first_name: 'Genevra',
      last_name: 'Orriss',
      email: 'gorrissb@unc.edu',
      active: 0,
      account_manager_id: 1,
      reason_for_joining:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
      created_date: '2019-04-29 11:53:31'
    },
    {
      id: 13,
      first_name: 'Elisha',
      last_name: 'Pikhno',
      email: 'epikhnoc@live.com',
      active: 1,
      account_manager_id: 3,
      reason_for_joining:
        'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
      created_date: '2019-02-26 10:17:57'
    },
    {
      id: 14,
      first_name: 'Gary',
      last_name: 'Ramplee',
      email: 'grampleed@tripadvisor.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
      created_date: '2019-05-11 22:15:39'
    },
    {
      id: 15,
      first_name: 'Teddi',
      last_name: 'Derrington',
      email: 'tderringtone@washington.edu',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst.',
      created_date: '2018-09-21 16:27:18'
    },
    {
      id: 16,
      first_name: 'Alvera',
      last_name: 'Danilyuk',
      email: 'adanilyukf@ca.gov',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Etiam faucibus cursus urna.',
      created_date: '2018-09-29 11:54:12'
    },
    {
      id: 17,
      first_name: 'Jany',
      last_name: 'Bavin',
      email: 'jbaving@scientificamerican.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
      created_date: '2019-02-23 09:25:11'
    },
    {
      id: 18,
      first_name: 'Dyane',
      last_name: 'Yallop',
      email: 'dyalloph@stanford.edu',
      active: 1,
      account_manager_id: 2,
      reason_for_joining:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      created_date: '2019-06-06 21:48:16'
    },
    {
      id: 19,
      first_name: 'Ernie',
      last_name: 'Kochlin',
      email: 'ekochlini@omniture.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
      created_date: '2019-03-03 11:40:10'
    },
    {
      id: 20,
      first_name: 'Wye',
      last_name: 'Scorton',
      email: 'wscortonj@ft.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Duis bibendum. Morbi non quam nec dui luctus rutrum.',
      created_date: '2018-08-11 17:08:03'
    },
    {
      id: 21,
      first_name: 'Diane',
      last_name: 'Kingstne',
      email: 'dkingstnek@psu.edu',
      active: 0,
      account_manager_id: 4,
      reason_for_joining:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      created_date: '2018-12-14 22:56:50'
    },
    {
      id: 22,
      first_name: 'Noah',
      last_name: 'Loach',
      email: 'nloachl@dropbox.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: null,
      created_date: '2018-09-20 00:53:32'
    },
    {
      id: 23,
      first_name: 'Paige',
      last_name: 'Chasmer',
      email: 'pchasmerm@upenn.edu',
      active: 0,
      account_manager_id: 1,
      reason_for_joining: 'Maecenas rhoncus aliquam lacus.',
      created_date: '2019-02-04 09:05:36'
    },
    {
      id: 24,
      first_name: 'Maryanna',
      last_name: 'Bretherton',
      email: 'mbrethertonn@flickr.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
      created_date: '2019-03-12 20:16:11'
    },
    {
      id: 25,
      first_name: 'Lee',
      last_name: 'Espley',
      email: 'lespleyo@google.com.hk',
      active: 1,
      account_manager_id: 3,
      reason_for_joining: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
      created_date: '2019-06-29 02:22:18'
    },
    {
      id: 26,
      first_name: 'Armand',
      last_name: 'La Torre',
      email: 'alatorrep@ustream.tv',
      active: 0,
      account_manager_id: 2,
      reason_for_joining:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      created_date: '2018-10-07 08:19:50'
    },
    {
      id: 27,
      first_name: 'Whittaker',
      last_name: 'Sebrens',
      email: 'wsebrensq@walmart.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
      created_date: '2018-09-27 23:30:50'
    },
    {
      id: 28,
      first_name: 'Cristina',
      last_name: 'Championnet',
      email: 'cchampionnetr@yahoo.co.jp',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
      created_date: '2019-06-23 08:04:33'
    },
    {
      id: 29,
      first_name: 'Nicholle',
      last_name: 'Morkham',
      email: 'nmorkhams@jimdo.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining:
        'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.',
      created_date: '2018-09-09 10:37:10'
    },
    {
      id: 30,
      first_name: 'Biron',
      last_name: 'Smitten',
      email: 'bsmittent@vk.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: 'Vestibulum rutrum rutrum neque.',
      created_date: '2018-09-23 02:34:33'
    },
    {
      id: 31,
      first_name: 'Carly',
      last_name: 'Nussen',
      email: 'cnussenu@state.gov',
      active: 0,
      account_manager_id: 5,
      reason_for_joining:
        'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
      created_date: '2018-12-21 02:30:37'
    },
    {
      id: 32,
      first_name: 'Carley',
      last_name: 'Curnokk',
      email: 'ccurnokkv@stumbleupon.com',
      active: 0,
      account_manager_id: 4,
      reason_for_joining: 'In congue. Etiam justo.',
      created_date: '2019-06-19 03:00:58'
    },
    {
      id: 33,
      first_name: 'Juieta',
      last_name: 'Crichten',
      email: 'jcrichtenw@boston.com',
      active: 0,
      account_manager_id: 2,
      reason_for_joining:
        'Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
      created_date: '2019-02-10 12:34:25'
    },
    {
      id: 34,
      first_name: 'Travus',
      last_name: 'Bumpus',
      email: 'tbumpusx@earthlink.net',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Morbi a ipsum. Integer a nibh.',
      created_date: '2018-11-18 02:37:30'
    },
    {
      id: 35,
      first_name: 'Liesa',
      last_name: 'Inker',
      email: 'linkery@jiathis.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: 'Duis ac nibh.',
      created_date: '2019-06-05 11:34:05'
    },
    {
      id: 36,
      first_name: 'Carlee',
      last_name: 'Somers',
      email: 'csomersz@barnesandnoble.com',
      active: 0,
      account_manager_id: 1,
      reason_for_joining:
        'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.',
      created_date: '2019-02-09 23:58:08'
    },
    {
      id: 37,
      first_name: 'Linnea',
      last_name: 'Dominguez',
      email: 'ldominguez10@creativecommons.org',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      created_date: '2019-06-05 02:29:50'
    },
    {
      id: 38,
      first_name: 'Dulcia',
      last_name: 'Reddyhoff',
      email: 'dreddyhoff11@geocities.jp',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Integer ac leo. Pellentesque ultrices mattis odio.',
      created_date: '2018-09-26 03:20:54'
    },
    {
      id: 39,
      first_name: 'Barny',
      last_name: 'Velten',
      email: 'bvelten12@harvard.edu',
      active: 0,
      account_manager_id: 3,
      reason_for_joining: 'Nulla justo.',
      created_date: '2018-08-14 14:12:06'
    },
    {
      id: 40,
      first_name: 'Jacki',
      last_name: 'Boij',
      email: 'jboij13@answers.com',
      active: 1,
      account_manager_id: 3,
      reason_for_joining:
        'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
      created_date: '2018-08-01 11:33:45'
    },
    {
      id: 41,
      first_name: 'Danie',
      last_name: 'Debell',
      email: 'ddebell14@guardian.co.uk',
      active: 1,
      account_manager_id: 2,
      reason_for_joining: 'Nunc rhoncus dui vel sem. Sed sagittis.',
      created_date: '2018-11-11 13:40:26'
    },
    {
      id: 42,
      first_name: 'Abbey',
      last_name: 'Sircombe',
      email: 'asircombe15@apple.com',
      active: 1,
      account_manager_id: 2,
      reason_for_joining:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
      created_date: '2019-06-05 14:38:34'
    },
    {
      id: 43,
      first_name: 'Leia',
      last_name: 'Doncom',
      email: 'ldoncom16@blogger.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
      created_date: '2018-10-31 05:38:46'
    },
    {
      id: 44,
      first_name: 'Onofredo',
      last_name: 'Daunay',
      email: 'odaunay17@cbc.ca',
      active: 0,
      account_manager_id: 1,
      reason_for_joining: 'Sed vel enim sit amet nunc viverra dapibus.',
      created_date: '2018-11-20 23:55:06'
    },
    {
      id: 45,
      first_name: 'Lorrin',
      last_name: 'Sheran',
      email: 'lsheran18@mashable.com',
      active: 1,
      account_manager_id: 3,
      reason_for_joining:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      created_date: '2018-10-10 19:40:29'
    },
    {
      id: 46,
      first_name: 'Worthy',
      last_name: 'Behnecke',
      email: 'wbehnecke19@microsoft.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
      created_date: '2018-11-01 07:33:11'
    },
    {
      id: 47,
      first_name: 'Gipsy',
      last_name: 'Morby',
      email: 'gmorby1a@oracle.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Pellentesque viverra pede ac diam.',
      created_date: '2019-03-09 07:25:57'
    },
    {
      id: 48,
      first_name: 'Vi',
      last_name: 'Grewar',
      email: 'vgrewar1b@blog.com',
      active: 1,
      account_manager_id: 1,
      reason_for_joining: 'Praesent lectus.',
      created_date: '2018-10-23 11:18:42'
    },
    {
      id: 49,
      first_name: 'Gabby',
      last_name: 'Adshead',
      email: 'gadshead1c@plala.or.jp',
      active: 0,
      account_manager_id: 3,
      reason_for_joining: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      created_date: '2018-11-13 19:57:19'
    },
    {
      id: 50,
      first_name: 'Gratiana',
      last_name: 'Scroggie',
      email: 'gscroggie1d@wordpress.org',
      active: 0,
      account_manager_id: 4,
      reason_for_joining: 'Duis aliquam convallis nunc.',
      created_date: '2019-05-26 03:09:50'
    }
  ];
  
  /**
   * Accounts
   */
  const accounts = [
    {
      id: 1,
      customer_id: 5,
      address: '107 Upham Point',
      city: 'Baltimore',
      state: 'MD',
      zip_code: '21239',
      solar_farm_id: 5,
      capacity_share: 0.8278,
      created_date: '2018-11-20 05:38:15'
    },
    {
      id: 2,
      customer_id: 40,
      address: '33344 Ludington Plaza',
      city: 'Roanoke',
      state: 'VA',
      zip_code: '24034',
      solar_farm_id: 4,
      capacity_share: 0.354,
      created_date: '2018-10-14 20:41:53'
    },
    {
      id: 3,
      customer_id: 19,
      address: '223 Claremont Lane',
      city: 'Cincinnati',
      state: 'OH',
      zip_code: '45218',
      solar_farm_id: 1,
      capacity_share: 0.2229,
      created_date: '2019-01-22 03:21:40'
    },
    {
      id: 4,
      customer_id: 42,
      address: '08890 Warbler Parkway',
      city: 'Harrisburg',
      state: 'PA',
      zip_code: '17140',
      solar_farm_id: 3,
      capacity_share: 0.9035,
      created_date: '2019-06-08 15:12:43'
    },
    {
      id: 5,
      customer_id: 31,
      address: '37928 Esch Lane',
      city: 'Austin',
      state: 'TX',
      zip_code: '78715',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-01-21 19:50:49'
    },
    {
      id: 6,
      customer_id: 12,
      address: '6 American Ash Road',
      city: 'Orlando',
      state: 'FL',
      zip_code: '32813',
      solar_farm_id: 10,
      capacity_share: 0.8447,
      created_date: '2019-07-03 01:08:14'
    },
    {
      id: 7,
      customer_id: 43,
      address: '013 Magdeline Park',
      city: 'Oklahoma City',
      state: 'OK',
      zip_code: '73135',
      solar_farm_id: 5,
      capacity_share: 0.622,
      created_date: '2019-05-15 17:08:43'
    },
    {
      id: 8,
      customer_id: 30,
      address: '06641 Cascade Pass',
      city: 'San Diego',
      state: 'CA',
      zip_code: '92145',
      solar_farm_id: 5,
      capacity_share: 0.4295,
      created_date: '2018-10-06 07:45:11'
    },
    {
      id: 9,
      customer_id: 48,
      address: '1 Hayes Place',
      city: 'Dallas',
      state: 'TX',
      zip_code: '75342',
      solar_farm_id: 7,
      capacity_share: 0.5173,
      created_date: '2018-09-30 10:24:54'
    },
    {
      id: 10,
      customer_id: 26,
      address: '69983 Debs Way',
      city: 'Albany',
      state: 'NY',
      zip_code: '12237',
      solar_farm_id: 2,
      capacity_share: 0.6813,
      created_date: '2018-09-14 10:55:11'
    },
    {
      id: 11,
      customer_id: 15,
      address: '5 Florence Way',
      city: 'San Francisco',
      state: 'CA',
      zip_code: '94164',
      solar_farm_id: 2,
      capacity_share: 0.3637,
      created_date: '2019-01-15 14:07:02'
    },
    {
      id: 12,
      customer_id: 18,
      address: '4 Farwell Circle',
      city: 'Washington',
      state: 'DC',
      zip_code: '20442',
      solar_farm_id: 9,
      capacity_share: 0.335,
      created_date: '2018-11-05 16:55:08'
    },
    {
      id: 13,
      customer_id: 21,
      address: '5401 Vera Street',
      city: 'San Jose',
      state: 'CA',
      zip_code: '95128',
      solar_farm_id: 5,
      capacity_share: 0.7984,
      created_date: '2019-05-12 15:55:12'
    },
    {
      id: 14,
      customer_id: 25,
      address: '386 Cherokee Junction',
      city: 'Phoenix',
      state: 'AZ',
      zip_code: '85083',
      solar_farm_id: 4,
      capacity_share: 0.7351,
      created_date: '2018-12-28 01:22:17'
    },
    {
      id: 15,
      customer_id: 28,
      address: '06 Old Gate Point',
      city: 'Saint Louis',
      state: 'MO',
      zip_code: '63150',
      solar_farm_id: 2,
      capacity_share: 0.8071,
      created_date: '2019-04-11 07:11:33'
    },
    {
      id: 16,
      customer_id: 3,
      address: '2 Milwaukee Court',
      city: 'Vancouver',
      state: 'WA',
      zip_code: '98682',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-06-18 13:41:59'
    },
    {
      id: 17,
      customer_id: 27,
      address: '390 Sutherland Street',
      city: 'Muskegon',
      state: 'MI',
      zip_code: '49444',
      solar_farm_id: 3,
      capacity_share: 0.7394,
      created_date: '2018-08-22 23:42:12'
    },
    {
      id: 18,
      customer_id: 46,
      address: '7 Sommers Drive',
      city: 'Milwaukee',
      state: 'WI',
      zip_code: '53234',
      solar_farm_id: 3,
      capacity_share: 0.4736,
      created_date: '2018-12-11 17:25:46'
    },
    {
      id: 19,
      customer_id: 46,
      address: '1 Coleman Way',
      city: 'Austin',
      state: 'TX',
      zip_code: '78715',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-08-05 20:09:11'
    },
    {
      id: 20,
      customer_id: 49,
      address: '32 Bultman Crossing',
      city: 'Philadelphia',
      state: 'PA',
      zip_code: '19120',
      solar_farm_id: 1,
      capacity_share: 0.5872,
      created_date: '2019-04-16 06:46:16'
    },
    {
      id: 21,
      customer_id: 30,
      address: '3277 Westend Lane',
      city: 'Colorado Springs',
      state: 'CO',
      zip_code: '80940',
      solar_farm_id: 4,
      capacity_share: 0.3371,
      created_date: '2019-06-12 03:50:56'
    },
    {
      id: 22,
      customer_id: 33,
      address: '7323 Transport Center',
      city: 'Irving',
      state: 'TX',
      zip_code: '75062',
      solar_farm_id: 4,
      capacity_share: 0.5006,
      created_date: '2018-11-28 09:18:20'
    },
    {
      id: 23,
      customer_id: 23,
      address: '4654 Carey Hill',
      city: 'Atlanta',
      state: 'GA',
      zip_code: '30316',
      solar_farm_id: 10,
      capacity_share: 0.962,
      created_date: '2018-08-22 04:13:53'
    },
    {
      id: 24,
      customer_id: 10,
      address: '6725 Forest Place',
      city: 'Salt Lake City',
      state: 'UT',
      zip_code: '84140',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-06-02 09:36:43'
    },
    {
      id: 25,
      customer_id: 22,
      address: '66 Hanover Terrace',
      city: 'Philadelphia',
      state: 'PA',
      zip_code: '19151',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-03-20 05:14:25'
    },
    {
      id: 26,
      customer_id: 44,
      address: '28730 Annamark Drive',
      city: 'Sacramento',
      state: 'CA',
      zip_code: '95865',
      solar_farm_id: 7,
      capacity_share: 0.5432,
      created_date: '2019-06-21 10:11:48'
    },
    {
      id: 27,
      customer_id: 34,
      address: '1 Heffernan Street',
      city: 'Syracuse',
      state: 'NY',
      zip_code: '13251',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-02-18 09:20:16'
    },
    {
      id: 28,
      customer_id: 30,
      address: '9 Grasskamp Terrace',
      city: 'Denver',
      state: 'CO',
      zip_code: '80291',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-07-18 05:31:17'
    },
    {
      id: 29,
      customer_id: 15,
      address: '2291 Dennis Court',
      city: 'Austin',
      state: 'TX',
      zip_code: '78721',
      solar_farm_id: 9,
      capacity_share: 0.5608,
      created_date: '2018-08-18 08:14:12'
    },
    {
      id: 30,
      customer_id: 13,
      address: '6360 Spenser Avenue',
      city: 'Aurora',
      state: 'CO',
      zip_code: '80045',
      solar_farm_id: 7,
      capacity_share: 0.5308,
      created_date: '2018-08-10 09:31:57'
    },
    {
      id: 31,
      customer_id: 25,
      address: '54545 Hoard Terrace',
      city: 'Tulsa',
      state: 'OK',
      zip_code: '74170',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-11-22 21:57:21'
    },
    {
      id: 32,
      customer_id: 5,
      address: '8 Surrey Alley',
      city: 'Norfolk',
      state: 'VA',
      zip_code: '23520',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-05-15 06:55:54'
    },
    {
      id: 33,
      customer_id: 4,
      address: '38522 Hayes Drive',
      city: 'Atlanta',
      state: 'GA',
      zip_code: '30340',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-06-04 14:59:37'
    },
    {
      id: 34,
      customer_id: 31,
      address: '4294 Merchant Way',
      city: 'Jamaica',
      state: 'NY',
      zip_code: '11499',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-09-03 06:52:36'
    },
    {
      id: 35,
      customer_id: 13,
      address: '67879 Burning Wood Crossing',
      city: 'Washington',
      state: 'DC',
      zip_code: '20503',
      solar_farm_id: 4,
      capacity_share: 0.2613,
      created_date: '2018-09-05 00:18:00'
    },
    {
      id: 36,
      customer_id: 27,
      address: '902 Ramsey Center',
      city: 'San Jose',
      state: 'CA',
      zip_code: '95138',
      solar_farm_id: 10,
      capacity_share: 0.926,
      created_date: '2019-06-29 21:28:32'
    },
    {
      id: 37,
      customer_id: 27,
      address: '0 Golf Way',
      city: 'Monticello',
      state: 'MN',
      zip_code: '55585',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-08-13 02:19:05'
    },
    {
      id: 38,
      customer_id: 22,
      address: '3627 Sycamore Terrace',
      city: 'Silver Spring',
      state: 'MD',
      zip_code: '20904',
      solar_farm_id: 6,
      capacity_share: 0.6232,
      created_date: '2019-03-02 00:55:19'
    },
    {
      id: 39,
      customer_id: 44,
      address: '0938 Erie Lane',
      city: 'Saint Paul',
      state: 'MN',
      zip_code: '55115',
      solar_farm_id: 6,
      capacity_share: 0.8201,
      created_date: '2018-12-20 15:17:34'
    },
    {
      id: 40,
      customer_id: 30,
      address: '0328 Moose Place',
      city: 'Cleveland',
      state: 'OH',
      zip_code: '44177',
      solar_farm_id: 7,
      capacity_share: 0.4278,
      created_date: '2018-10-08 05:11:04'
    },
    {
      id: 41,
      customer_id: 11,
      address: '10 Hansons Hill',
      city: 'Albany',
      state: 'NY',
      zip_code: '12255',
      solar_farm_id: 8,
      capacity_share: 0.4097,
      created_date: '2018-10-11 20:39:49'
    },
    {
      id: 42,
      customer_id: 38,
      address: '86315 Mccormick Plaza',
      city: 'Cincinnati',
      state: 'OH',
      zip_code: '45271',
      solar_farm_id: 7,
      capacity_share: 0.6382,
      created_date: '2018-09-29 01:14:52'
    },
    {
      id: 43,
      customer_id: 50,
      address: '99958 Thompson Center',
      city: 'New York City',
      state: 'NY',
      zip_code: '10280',
      solar_farm_id: 1,
      capacity_share: 0.6981,
      created_date: '2018-12-03 08:38:39'
    },
    {
      id: 44,
      customer_id: 38,
      address: '83815 Annamark Junction',
      city: 'Honolulu',
      state: 'HI',
      zip_code: '96835',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-11-22 17:26:10'
    },
    {
      id: 45,
      customer_id: 7,
      address: '05 Carey Circle',
      city: 'Detroit',
      state: 'MI',
      zip_code: '48206',
      solar_farm_id: 7,
      capacity_share: 0.497,
      created_date: '2019-06-02 04:20:02'
    },
    {
      id: 46,
      customer_id: 22,
      address: '8 Hanson Drive',
      city: 'Lees Summit',
      state: 'MO',
      zip_code: '64082',
      solar_farm_id: 5,
      capacity_share: 0.5396,
      created_date: '2019-02-07 12:37:35'
    },
    {
      id: 47,
      customer_id: 29,
      address: '9 Oxford Court',
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78296',
      solar_farm_id: 8,
      capacity_share: 0.5955,
      created_date: '2019-05-03 19:48:50'
    },
    {
      id: 48,
      customer_id: 14,
      address: '5929 Donald Circle',
      city: 'San Diego',
      state: 'CA',
      zip_code: '92191',
      solar_farm_id: 6,
      capacity_share: 0.5766,
      created_date: '2018-07-27 05:01:56'
    },
    {
      id: 49,
      customer_id: 41,
      address: '159 Corben Junction',
      city: 'Wichita',
      state: 'KS',
      zip_code: '67220',
      solar_farm_id: 1,
      capacity_share: 0.3511,
      created_date: '2019-02-18 16:18:53'
    },
    {
      id: 50,
      customer_id: 8,
      address: '87 Schurz Junction',
      city: 'Athens',
      state: 'GA',
      zip_code: '30605',
      solar_farm_id: 3,
      capacity_share: 0.6482,
      created_date: '2019-01-29 21:31:58'
    },
    {
      id: 51,
      customer_id: 36,
      address: '862 Glacier Hill Road',
      city: 'Philadelphia',
      state: 'PA',
      zip_code: '19125',
      solar_farm_id: 8,
      capacity_share: 0.4984,
      created_date: '2018-11-28 10:04:58'
    },
    {
      id: 52,
      customer_id: 16,
      address: '184 School Alley',
      city: 'North Port',
      state: 'FL',
      zip_code: '34290',
      solar_farm_id: 5,
      capacity_share: 0.3542,
      created_date: '2018-08-09 02:57:25'
    },
    {
      id: 53,
      customer_id: 33,
      address: '316 Morning Plaza',
      city: 'Lexington',
      state: 'KY',
      zip_code: '40576',
      solar_farm_id: 9,
      capacity_share: 0.4937,
      created_date: '2019-02-05 06:37:09'
    },
    {
      id: 54,
      customer_id: 16,
      address: '1603 Talmadge Circle',
      city: 'Lafayette',
      state: 'IN',
      zip_code: '47905',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-02-15 02:11:23'
    },
    {
      id: 55,
      customer_id: 7,
      address: '96881 Chive Point',
      city: 'New York City',
      state: 'NY',
      zip_code: '10175',
      solar_farm_id: 3,
      capacity_share: 0.5796,
      created_date: '2018-12-30 09:19:40'
    },
    {
      id: 56,
      customer_id: 10,
      address: '1047 Lotheville Circle',
      city: 'Charlotte',
      state: 'NC',
      zip_code: '28242',
      solar_farm_id: 6,
      capacity_share: 0.4683,
      created_date: '2019-06-19 12:35:41'
    },
    {
      id: 57,
      customer_id: 39,
      address: '781 Utah Trail',
      city: 'Metairie',
      state: 'LA',
      zip_code: '70005',
      solar_farm_id: 8,
      capacity_share: 0.7259,
      created_date: '2019-01-21 04:59:26'
    },
    {
      id: 58,
      customer_id: 21,
      address: '91793 Fairview Court',
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78278',
      solar_farm_id: 7,
      capacity_share: 0.6081,
      created_date: '2018-10-13 19:46:14'
    },
    {
      id: 59,
      customer_id: 9,
      address: '9199 Anthes Plaza',
      city: 'Miami',
      state: 'FL',
      zip_code: '33180',
      solar_farm_id: 2,
      capacity_share: 0.2715,
      created_date: '2019-04-10 13:30:34'
    },
    {
      id: 60,
      customer_id: 19,
      address: '4 Fordem Park',
      city: 'Portland',
      state: 'OR',
      zip_code: '97201',
      solar_farm_id: 7,
      capacity_share: 0.2915,
      created_date: '2018-07-16 08:49:58'
    },
    {
      id: 61,
      customer_id: 49,
      address: '696 Ryan Crossing',
      city: 'Delray Beach',
      state: 'FL',
      zip_code: '33448',
      solar_farm_id: 8,
      capacity_share: 0.5925,
      created_date: '2018-08-18 11:47:46'
    },
    {
      id: 62,
      customer_id: 4,
      address: '44918 Grasskamp Park',
      city: 'Lynchburg',
      state: 'VA',
      zip_code: '24503',
      solar_farm_id: 4,
      capacity_share: 0.9774,
      created_date: '2019-03-07 09:22:05'
    },
    {
      id: 63,
      customer_id: 17,
      address: '218 Village Green Road',
      city: 'Wilkes Barre',
      state: 'PA',
      zip_code: '18768',
      solar_farm_id: 4,
      capacity_share: 0.4229,
      created_date: '2019-05-12 12:02:21'
    },
    {
      id: 64,
      customer_id: 25,
      address: '251 Waxwing Terrace',
      city: 'Las Vegas',
      state: 'NV',
      zip_code: '89140',
      solar_farm_id: 1,
      capacity_share: 0.7341,
      created_date: '2018-12-14 21:45:03'
    },
    {
      id: 65,
      customer_id: 22,
      address: '73 Service Junction',
      city: 'Jacksonville',
      state: 'FL',
      zip_code: '32244',
      solar_farm_id: 8,
      capacity_share: 0.9986,
      created_date: '2018-11-27 04:10:24'
    },
    {
      id: 66,
      customer_id: 49,
      address: '20 Vidon Circle',
      city: 'Abilene',
      state: 'TX',
      zip_code: '79699',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-02-28 18:38:14'
    },
    {
      id: 67,
      customer_id: 36,
      address: '159 Veith Road',
      city: 'Jacksonville',
      state: 'FL',
      zip_code: '32230',
      solar_farm_id: 7,
      capacity_share: 0.3331,
      created_date: '2019-01-16 05:32:25'
    },
    {
      id: 68,
      customer_id: 30,
      address: '23 Nova Street',
      city: 'Phoenix',
      state: 'AZ',
      zip_code: '85083',
      solar_farm_id: 1,
      capacity_share: 0.4913,
      created_date: '2019-02-09 23:59:51'
    },
    {
      id: 69,
      customer_id: 5,
      address: '106 Shoshone Trail',
      city: 'Hollywood',
      state: 'FL',
      zip_code: '33028',
      solar_farm_id: 9,
      capacity_share: 0.7232,
      created_date: '2018-09-02 15:44:45'
    },
    {
      id: 70,
      customer_id: 8,
      address: '38217 Kinsman Plaza',
      city: 'Lafayette',
      state: 'LA',
      zip_code: '70505',
      solar_farm_id: 7,
      capacity_share: 0.5976,
      created_date: '2019-05-30 11:53:11'
    },
    {
      id: 71,
      customer_id: 22,
      address: '522 Fuller Center',
      city: 'New York City',
      state: 'NY',
      zip_code: '10280',
      solar_farm_id: 4,
      capacity_share: 0.3822,
      created_date: '2019-01-28 21:46:40'
    },
    {
      id: 72,
      customer_id: 39,
      address: '97772 Steensland Hill',
      city: 'Fort Worth',
      state: 'TX',
      zip_code: '76162',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2018-09-14 08:30:37'
    },
    {
      id: 73,
      customer_id: 24,
      address: '58852 Roxbury Trail',
      city: 'Mesquite',
      state: 'TX',
      zip_code: '75185',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-03-28 08:47:34'
    },
    {
      id: 74,
      customer_id: 21,
      address: '2463 Cody Pass',
      city: 'Cleveland',
      state: 'OH',
      zip_code: '44118',
      solar_farm_id: 2,
      capacity_share: 0.6035,
      created_date: '2019-06-08 10:25:04'
    },
    {
      id: 75,
      customer_id: 18,
      address: '39 Alpine Drive',
      city: 'Newark',
      state: 'DE',
      zip_code: '19725',
      solar_farm_id: 9,
      capacity_share: 0.9536,
      created_date: '2019-01-16 18:09:17'
    },
    {
      id: 76,
      customer_id: 41,
      address: '242 Longview Road',
      city: 'Oklahoma City',
      state: 'OK',
      zip_code: '73114',
      solar_farm_id: 3,
      capacity_share: 0.2579,
      created_date: '2019-04-23 13:34:47'
    },
    {
      id: 77,
      customer_id: 9,
      address: '153 Aberg Street',
      city: 'Winston Salem',
      state: 'NC',
      zip_code: '27150',
      solar_farm_id: 7,
      capacity_share: 0.696,
      created_date: '2019-01-23 12:16:28'
    },
    {
      id: 78,
      customer_id: 38,
      address: '9753 Mayfield Point',
      city: 'Pittsburgh',
      state: 'PA',
      zip_code: '15250',
      solar_farm_id: 8,
      capacity_share: 0.2874,
      created_date: '2019-05-30 06:54:47'
    },
    {
      id: 79,
      customer_id: 7,
      address: '9 Westend Parkway',
      city: 'New York City',
      state: 'NY',
      zip_code: '10270',
      solar_farm_id: 10,
      capacity_share: 0.5933,
      created_date: '2018-12-18 08:51:34'
    },
    {
      id: 80,
      customer_id: 8,
      address: '71 Hoepker Pass',
      city: 'Redwood City',
      state: 'CA',
      zip_code: '94064',
      solar_farm_id: 5,
      capacity_share: 0.4552,
      created_date: '2018-08-23 00:01:04'
    },
    {
      id: 81,
      customer_id: 36,
      address: '01795 Anniversary Junction',
      city: 'Miami',
      state: 'FL',
      zip_code: '33196',
      solar_farm_id: 5,
      capacity_share: 0.2095,
      created_date: '2018-11-16 13:54:57'
    },
    {
      id: 82,
      customer_id: 46,
      address: '74 Magdeline Trail',
      city: 'San Antonio',
      state: 'TX',
      zip_code: '78260',
      solar_farm_id: 6,
      capacity_share: 0.6752,
      created_date: '2019-06-14 23:48:02'
    },
    {
      id: 83,
      customer_id: 43,
      address: '7 Ilene Parkway',
      city: 'Fort Myers',
      state: 'FL',
      zip_code: '33994',
      solar_farm_id: 8,
      capacity_share: 0.752,
      created_date: '2019-06-22 09:26:28'
    },
    {
      id: 84,
      customer_id: 7,
      address: '51244 Mesta Lane',
      city: 'Waterbury',
      state: 'CT',
      zip_code: '06721',
      solar_farm_id: 1,
      capacity_share: 0.8393,
      created_date: '2019-05-03 12:33:22'
    },
    {
      id: 85,
      customer_id: 28,
      address: '0 Forest Dale Terrace',
      city: 'Austin',
      state: 'TX',
      zip_code: '78721',
      solar_farm_id: 6,
      capacity_share: 0.8364,
      created_date: '2018-07-09 12:59:12'
    },
    {
      id: 86,
      customer_id: 36,
      address: '90 Vidon Park',
      city: 'Great Neck',
      state: 'NY',
      zip_code: '11024',
      solar_farm_id: 9,
      capacity_share: 0.6884,
      created_date: '2018-12-12 12:26:39'
    },
    {
      id: 87,
      customer_id: 41,
      address: '06531 Moland Alley',
      city: 'Seattle',
      state: 'WA',
      zip_code: '98133',
      solar_farm_id: 3,
      capacity_share: 0.6737,
      created_date: '2018-11-04 06:30:28'
    },
    {
      id: 88,
      customer_id: 25,
      address: '3535 Tony Circle',
      city: 'Huntsville',
      state: 'TX',
      zip_code: '77343',
      solar_farm_id: null,
      capacity_share: null,
      created_date: '2019-02-08 19:05:25'
    },
    {
      id: 89,
      customer_id: 22,
      address: '27 Scoville Point',
      city: 'Akron',
      state: 'OH',
      zip_code: '44305',
      solar_farm_id: 7,
      capacity_share: 0.4385,
      created_date: '2019-01-22 05:52:26'
    },
    {
      id: 90,
      customer_id: 42,
      address: '88 Riverside Trail',
      city: 'White Plains',
      state: 'NY',
      zip_code: '10633',
      solar_farm_id: 7,
      capacity_share: 0.8983,
      created_date: '2018-10-26 09:33:45'
    },
    {
      id: 91,
      customer_id: 15,
      address: '124 Rowland Point',
      city: 'Ashburn',
      state: 'VA',
      zip_code: '22093',
      solar_farm_id: 5,
      capacity_share: 0.3503,
      created_date: '2019-05-07 16:52:35'
    },
    {
      id: 92,
      customer_id: 38,
      address: '039 Melby Parkway',
      city: 'Sacramento',
      state: 'CA',
      zip_code: '94245',
      solar_farm_id: 8,
      capacity_share: 0.2333,
      created_date: '2018-11-18 08:08:39'
    },
    {
      id: 93,
      customer_id: 12,
      address: '386 Meadow Vale Crossing',
      city: 'San Diego',
      state: 'CA',
      zip_code: '92153',
      solar_farm_id: 7,
      capacity_share: 0.6726,
      created_date: '2018-12-04 18:37:26'
    },
    {
      id: 94,
      customer_id: 6,
      address: '06 Ramsey Terrace',
      city: 'Pittsburgh',
      state: 'PA',
      zip_code: '15261',
      solar_farm_id: 6,
      capacity_share: 0.7362,
      created_date: '2019-06-27 17:38:51'
    },
    {
      id: 95,
      customer_id: 18,
      address: '58268 Basil Crossing',
      city: 'Rochester',
      state: 'NY',
      zip_code: '14614',
      solar_farm_id: 9,
      capacity_share: 0.5557,
      created_date: '2019-04-12 16:55:33'
    },
    {
      id: 96,
      customer_id: 24,
      address: '98218 Bultman Trail',
      city: 'Austin',
      state: 'TX',
      zip_code: '78749',
      solar_farm_id: 2,
      capacity_share: 0.5318,
      created_date: '2018-10-21 01:22:38'
    },
    {
      id: 97,
      customer_id: 16,
      address: '2 Granby Drive',
      city: 'Juneau',
      state: 'AK',
      zip_code: '99812',
      solar_farm_id: 1,
      capacity_share: 0.5908,
      created_date: '2019-06-29 18:27:44'
    },
    {
      id: 98,
      customer_id: 35,
      address: '9034 Moulton Center',
      city: 'Tallahassee',
      state: 'FL',
      zip_code: '32309',
      solar_farm_id: 4,
      capacity_share: 0.71,
      created_date: '2019-04-14 07:37:25'
    },
    {
      id: 99,
      customer_id: 3,
      address: '89 Burning Wood Park',
      city: 'Beaumont',
      state: 'TX',
      zip_code: '77705',
      solar_farm_id: 1,
      capacity_share: 0.6464,
      created_date: '2018-09-11 10:54:08'
    },
    {
      id: 100,
      customer_id: 36,
      address: '91530 4th Terrace',
      city: 'New York City',
      state: 'NY',
      zip_code: '10280',
      solar_farm_id: 3,
      capacity_share: 0.6869,
      created_date: '2019-01-01 05:22:14'
    }
  ];
  export default {
    customers,
    accounts
  }