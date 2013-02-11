var s_stat = [ "base"
             , "type"
             , "cool"
             , "stat"
             , "max"
             ]

  , s_attr = [ "hp"
             , "mp"
             , "atk"
             , "def"
             , "agi"
             , "wis"
             ]

  , g_name_p = [ "40013"
               , "40014"
               , "40037"
               , "40038"
               , "30021"
               , "30040"
               , "30041"
               , "30042"
               ]

  , g_name_c = [ "40045"
               , "40046"
               , "40041"
               , "40042"
               , "40109"
               , "40110"
               , "40111"
               , "40072"
               , "40073"
               , "40074"
               , "40112"
               , "40113"
               , "40114"
               , "40035"
               , "40036"
               , "40128"
               , "40115"
               , "40116"
               , "40117"
               , "40028"
               , "40029"
               , "40075"
               , "40076"
               , "40077"
               , "40118"
               , "40119"
               , "40120"
               , "40015"
               , "40059"
               , "40106"
               , "40107"
               , "40108"
               , "40033"
               , "40034"
               , "40031"
               , "40032"
               , "40124"
               , "40016"
               , "40062"
               , "40060"
               , "40061"
               , "40043"
               , "40044"
               , "40142"
               , "40067"
               , "40068"
               , "40069"
               , "40039"
               , "40040"
               , "40063"
               , "40064"
               ]

  , g_name_6 = [ "40050"
               , "40017"
               , "40045"
               , "40046"
               , "40022"
               , "40057"
               , "40058"
               , "40019"
               , "40041"
               , "40042"
               , "40109"
               , "40110"
               , "40111"
               , "40072"
               , "40073"
               , "40074"
               , "40112"
               , "40113"
               , "40114"
               , "40030"
               , "40104"
               , "40056"
               , "40102"
               , "40048"
               , "40091"
               , "40009"
               , "40049"
               , "40025"
               , "40024"
               , "40020"
               , "40035"
               , "40036"
               , "40128"
               , "40115"
               , "40116"
               , "40117"
               , "40090"
               , "40001"
               , "40028"
               , "40029"
               , "40008"
               , "40075"
               , "40076"
               , "40077"
               , "40118"
               , "40119"
               , "40120"
               , "40002"
               , "40015"
               , "40059"
               , "40106"
               , "40107"
               , "40108"
               , "40004"
               , "40010"
               , "40033"
               , "40034"
               , "40093"
               , "40053"
               , "40011"
               , "40031"
               , "40032"
               , "40124"
               , "40023"
               , "40060"
               , "40061"
               , "40101"
               , "40103"
               , "40055"
               , "40054"
               , "40021"
               , "40079"
               , "40080"
               , "40081"
               , "40052"
               , "40018"
               , "40043"
               , "40044"
               , "40142"
               , "40047"
               , "40003"
               , "40016"
               , "40062"
               , "40067"
               , "40068"
               , "40069"
               , "40092"
               , "40012"
               , "40039"
               , "40040"
               , "40007"
               , "40063"
               , "40064"
               ]

  , g_name_5 = [ "40050"
               , "40017"
               , "40022"
               , "40019"
               , "40030"
               , "40104"
               , "40056"
               , "40102"
               , "40048"
               , "40091"
               , "40009"
               , "40049"
               , "40025"
               , "40024"
               , "40020"
               , "40090"
               , "40001"
               , "40008"
               , "40002"
               , "40004"
               , "40010"
               , "40055"
               , "40093"
               , "40053"
               , "40011"
               , "40023"
               , "40101"
               , "40103"
               , "40054"
               , "40021"
               , "40052"
               , "40018"
               , "40047"
               , "40092"
               , "40003"
               , "40012"
               , "40007"
               ]

  , g_name_4 = [ "30017"
               , "30022"
               , "30044"
               , "30015"
               , "30043"
               , "30026"
               , "30034"
               , "30033"
               , "30018"
               , "30010"
               , "30004"
               , "30025"
               , "30005"
               , "30008"
               , "30006"
               , "30003"
               , "30014"
               , "30012"
               , "30028"
               , "30027"
               , "30038"
               , "30030"
               , "30009"
               , "30031"
               , "30007"
               , "30035"
               , "30001"
               , "30037"
               , "30013"
               , "30011"
               ]

  , g_type = [ {"id":"Ace", "stat":"1.1 1.1 1.1 1.1 1.1 1.1"}
             , {"id":"Cool", "stat":"1 1 1 1 1 1"}
             , {"id":"Chaotic", "stat":"1.1 1 1 1 1 0.9"}
             , {"id":"Sexy", "stat":"0.9 1.1 1 1 1 1"}
             , {"id":"Powerful", "stat":"1 1 1.1 1 0.9 1"}
             , {"id":"Brave", "stat":"1 0.9 1 1.1 1 1"}
             , {"id":"Fast", "stat":"1 1 1 0.9 1.1 1"}
             , {"id":"Intelligent", "stat":"1 1 0.9 1 1 1.1"}
             ]

  , g_stat = [ {"id":"40001", "name":"Ifrit", "lv1":"1010 1005 1080 1050 920 920"}
             , {"id":"40002", "name":"Leviathan", "lv1":"1025 1015 1050 1080 900 920"}
             , {"id":"40003", "name":"Titan", "lv1":"1050 1025 1070 1060 910 910"}
             , {"id":"40004", "name":"Lightning Lord", "lv1":"950 1002 1050 1030 1070 950"}
             , {"id":"40007", "name":"Vampire Matron", "lv1":"1008 1007 980 960 1008 1002"}
             , {"id":"40008", "name":"Juggernaut", "lv1":"850 868 1110 1150 852 880"}
             , {"id":"40009", "name":"Dominion", "lv1":"920 1020 1127 1068 1008 1148"}
             , {"id":"40010", "name":"Mephistopheles", "lv1":"900 1138 940 950 976 1050"}
             , {"id":"40011", "name":"Phoenix", "lv1":"952 934 980 1020 1084 1016"}
             , {"id":"40012", "name":"Valkyrie", "lv1":"912 1061 980 976 1039 1077"}
             , {"id":"40013", "name":"Lord of the Inferno", "lv1":"1030 1005 1069 1051 957 946"}
             , {"id":"40014", "name":"- Midgardsormr", "lv1":"1031 996 1023 1017 980 1013"}
             , {"id":"40015", "name":"Almighty Leviathan", "lv1":"1090 1066 1260 1129 981 947"}
             , {"id":"40016", "name":"Almighty Titan", "lv1":"1400 1025 1070 1060 910 910"}
             , {"id":"40017", "name":"Apsara", "lv1":"914 1170 912 910 1062 1130"}
             , {"id":"40018", "name":"Stymphalian Bird", "lv1":"1023 910 1037 1004 1127 912"}
             , {"id":"40019", "name":"Azi Dahaka", "lv1":"1140 1030 1060 913 911 1070"}
             , {"id":"40020", "name":"Gargantua", "lv1":"1210 914 1200 1020 915 940"}
             , {"id":"40021", "name":"Shiva", "lv1":"1083 1183 1002 1028 985 1200"}
             , {"id":"40022", "name":"Atlas", "lv1":"1160 930 1150 1090 967 911"}
             , {"id":"40023", "name":"Raijin", "lv1":"1110 980 1120 1020 1030 980"}
             , {"id":"40024", "name":"Fujin", "lv1":"1060 1070 1080 1080 997 1070"}
             , {"id":"40025", "name":"Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40026", "name":"- Almighty Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40027", "name":"- Mighty Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40028", "name":"Almighty Ifrit", "lv1":"1060 1055 1134 1105 966 966"}
             , {"id":"40029", "name":"Mighty Ifrit", "lv1":"1010 1005 1080 1050 920 920"}
             , {"id":"40030", "name":"Bahamut", "lv1":"1000 1006 1111 954 999 1028"}
             , {"id":"40031", "name":"Almighty Phoenix", "lv1":"1240 1064 999 1040 1180 1110"}
             , {"id":"40032", "name":"Mighty Phoenix", "lv1":"1120 984 999 1040 1150 1110"}
             , {"id":"40033", "name":"Almighty Mephistopheles", "lv1":"945 1194 987 997 1024 1102"}
             , {"id":"40034", "name":"Mighty Mephistopheles", "lv1":"918 1160 958 969 995 1071"}
             , {"id":"40035", "name":"Almighty Gargantua", "lv1":"1400 1005 1280 1122 956 1034"}
             , {"id":"40036", "name":"Mighty Gargantua", "lv1":"1320 914 1220 1020 956 1020"}
             , {"id":"40037", "name":"Iron Maiden", "lv1":"1058 988 1099 1037 944 932 6058"}
             , {"id":"40038", "name":"Requiem Banshee", "lv1":"961 1106 966 1001 1005 1099"}
             , {"id":"40039", "name":"Almighty Valkyrie", "lv1":"957 1114 1029 1024 1090 1130"}
             , {"id":"40040", "name":"Mighty Valkyrie", "lv1":"930 1082 999 995 1059 1098"}
             , {"id":"40041", "name":"Archfiend Azi Dahaka", "lv1":"10 1030 1600 913 1250 1600"}
             , {"id":"40042", "name":"Highfiend Azi Dahaka", "lv1":"10 1030 1200 913 1000 1200"}
             , {"id":"40043", "name":"Almighty Stymphalian Bird", "lv1":"1560 900 1000 1200 1400 1031"}
             , {"id":"40044", "name":"Mighty Stymphalian Bird", "lv1":"1400 1000 920 1200 1320 1031"}
             , {"id":"40045", "name":"Almighty Apsara", "lv1":"1560 1170 912 910 1062 1130"}
             , {"id":"40046", "name":"Mighty Apsara", "lv1":"1160 1170 912 910 1062 1130"}
             , {"id":"40047", "name":"Sucellus", "lv1":"1006 1072 1167 975 949 1119"}
             , {"id":"40048", "name":"Chariot", "lv1":"1019 855 1102 1038 1105 880"}
             , {"id":"40049", "name":"Ettin", "lv1":"1085 1120 979 1109 927 1200"}
             , {"id":"40050", "name":"Agni", "lv1":"1029 1168 1011 977 1024 1149"}
             , {"id":"40051", "name":"Dagon", "lv1":""}
             , {"id":"40052", "name":"Sphinx Empress", "lv1":"1080 1044 1130 985 1162 1159"}
             , {"id":"40053", "name":"Nuada", "lv1":"1032 977 1210 1103 1003 975"}
             , {"id":"40054", "name":"Serenade Banshee", "lv1":"991 1080 959 1001 1039 1220"}
             , {"id":"40055", "name":"Mictlantecuhtli", "lv1":"1005 1242 910 1059 945 1079"}
             , {"id":"40056", "name":"Behemoth", "lv1":"1149 940 1163 1215 890 978"}
             , {"id":"40057", "name":"Almighty Atlas", "lv1":"1160 1040 1150 1090 913 1250"}
             , {"id":"40058", "name":"Mighty Atlas", "lv1":"1160 1040 1150 1090 913 1100"}
             , {"id":"40059", "name":"Mighty Leviathan", "lv1":"1025 1015 1154 1080 900 920"}
             , {"id":"40060", "name":"Almighty Raijin", "lv1":"1165 1029 1176 1071 1400 1060"}
             , {"id":"40061", "name":"Mighty Raijin", "lv1":"1110 980 1120 1020 1320 1010"}
             , {"id":"40062", "name":"Mighty Titan", "lv1":"1200 1025 1070 1060 910 910"}
             , {"id":"40063", "name":"Almighty Vampire Matron", "lv1":"1350 1007 980 960 1008 1002"}
             , {"id":"40064", "name":"Mighty Vampire Matron", "lv1":"1200 1007 980 960 1008 1002"}
             , {"id":"40067", "name":"Almighty Pumpkin Chuckin' Titan", "lv1":"1500 1025 1070 1060 910 910"}
             , {"id":"40068", "name":"Mighty Pumpkin Chuckin' Titan", "lv1":"1230 1025 1070 1060 910 910"}
             , {"id":"40069", "name":"Great Pumpkin Chuckin' Titan", "lv1":"1080 1025 1070 1060 910 910"}
             , {"id":"40072", "name":"Almighty Banshee Witch", "lv1":"1117 930 966 1001 1005 1200"}
             , {"id":"40073", "name":"Mighty Banshee Witch", "lv1":"1047 930 966 1001 1005 1099"}
             , {"id":"40074", "name":"Great Banshee Witch", "lv1":"998 930 966 1001 1005 965"}
             , {"id":"40075", "name":"Maniacal Juggernaut", "lv1":"666 1720 2300 666 666 666"}
             , {"id":"40076", "name":"Frenzied Juggernaut", "lv1":"666 1520 2040 666 666 666"}
             , {"id":"40077", "name":"Crazed Juggernaut", "lv1":"666 2110 666 666 666 666"}
             , {"id":"40079", "name":"Almighty Shiva", "lv1":"1200 1183 1002 1205 1150 1300"}
             , {"id":"40080", "name":"Mighty Shiva", "lv1":"1012 1183 1002 1028 1050 1200"}
             , {"id":"40081", "name":"Great Shiva", "lv1":"1012 960 1100 1028 985 1100"}
             , {"id":"40090", "name":"Hoarfrost Phoenix", "lv1":"1027 993 993 1053 1140 1074"}
             , {"id":"40091", "name":"Crocell", "lv1":"995 1440 988 950 992 1095"}
             , {"id":"40092", "name":"Thor", "lv1":"1200 1007 1193 960 993 1047"}
             , {"id":"40093", "name":"Morrighan", "lv1":"1070 1012 1180 1065 1120 1090"}
             , {"id":"40101", "name":"Rubicante", "lv1":"1320 1160 1090 1028 1040 1040"}
             , {"id":"40102", "name":"Cagnazzo", "lv1":"1200 1092 1138 1220 910 1100"}
             , {"id":"40103", "name":"Scarmiglione", "lv1":"1010 1130 1120 1020 995 960"}
             , {"id":"40104", "name":"Barbariccia", "lv1":"1070 1220 1010 977 1200 1040"}
             , {"id":"40105", "name":"Golbez", "lv1":"10 320 1060 913 1400 2000"}
             , {"id":"40106", "name":"Almighty Yuletide Lich", "lv1":"1117 1040 959 1001 990 1150"}
             , {"id":"40107", "name":"Mighty Yuletide Lich", "lv1":"984 1040 959 1001 990 1050"}
             , {"id":"40108", "name":"Yuletide Lich", "lv1":"938 1040 959 1001 990 1000"}
             , {"id":"40109", "name":"Almighty Jolly Old Azi Dahaka", "lv1":"10 320 1060 913 1400 2000"}
             , {"id":"40110", "name":"Mighty Jolly Old Azi Dahaka", "lv1":"10 320 1060 913 1320 1700"}
             , {"id":"40111", "name":"Great Jolly Old Azi Dahaka", "lv1":"10 320 1060 913 1200 1500"}
             , {"id":"40112", "name":"Almighty Christmas Banshee", "lv1":"1560 1080 959 1001 1039 1220"}
             , {"id":"40113", "name":"Mighty Christmas Banshee", "lv1":"1160 1080 959 1001 1039 1220"}
             , {"id":"40114", "name":"Great Christmas Banshee", "lv1":"990 1080 959 1001 1039 1220"}
             , {"id":"40115", "name":"Almighty Golbez", "lv1":"1320 1150 1100 1880 890 1220"}
             , {"id":"40116", "name":"Mighty Golbez", "lv1":"1280 1130 1100 1820 850 1200"}
             , {"id":"40117", "name":"Great Golbez", "lv1":"1177 1100 1100 1600 850 1160"}
             , {"id":"40118", "name":"Almighty Serpentress Lamia", "lv1":"1160 1100 1100 920 1360 1250"}
             , {"id":"40119", "name":"Mighty Serpentress Lamia", "lv1":"1080 1060 1040 920 1280 1120"}
             , {"id":"40120", "name":"Great Serpentress Lamia", "lv1":"990 1060 990 920 1220 1040"}
             , {"id":"40124", "name":"Great Phoenix", "lv1":"952 934 980 1020 1084 1016"}
             , {"id":"40128", "name":"Great Gargantua", "lv1":"1210 1020 1200 1020 915 940"}
             , {"id":"40142", "name":"Great Stymphalian Bird", "lv1":"1320 1000 920 1200 1240 1031"}
             , {"id":"30001", "name":"Suzaku", "lv1":"794 898 830 866 912 892"}
             , {"id":"30003", "name":"Kraken", "lv1":"830 720 915 800 760 780"}
             , {"id":"30004", "name":"Genbu", "lv1":"868 902 810 940 830 880"}
             , {"id":"30005", "name":"Golem", "lv1":"966 820 966 966 800 760"}
             , {"id":"30006", "name":"Jormungandr", "lv1":"924 896 820 850 790 829"}
             , {"id":"30007", "name":"Seiryu", "lv1":"868 794 889 900 903 862"}
             , {"id":"30008", "name":"Hecatoncheir", "lv1":"822 835 899 850 830 851"}
             , {"id":"30009", "name":"Ramiel", "lv1":"800 802 816 773 816 803"}
             , {"id":"30010", "name":"Garuda", "lv1":"848 872 848 796 886 848"}
             , {"id":"30011", "name":"Wyvern", "lv1":"774 798 866 850 890 842"}
             , {"id":"30012", "name":"Medusa", "lv1":"819 882 824 820 844 823"}
             , {"id":"30013", "name":"Vampire", "lv1":"835 914 906 835 882 910"}
             , {"id":"30014", "name":"- Lich", "lv1":"730 928 728 740 715 948"}
             , {"id":"30015", "name":"Byakko", "lv1":"869 822 895 902 840 893"}
             , {"id":"30017", "name":"Angel", "lv1":"764 873 860 751 866 924"}
             , {"id":"30018", "name":"Fenrir", "lv1":"792 754 852 792 848 760"}
             , {"id":"30021", "name":"Cerberus", "lv1":"856 808 877 857 851 846"}
             , {"id":"30022", "name":"- Behemoth", "lv1":"864 841 871 859 825 836"}
             , {"id":"30025", "name":"Giant", "lv1":"892 760 872 774 766 764"}
             , {"id":"30026", "name":"Dullahan", "lv1":"828 877 864 886 812 841"}
             , {"id":"30027", "name":"Pazuzu", "lv1":"742 815 860 804 802 789"}
             , {"id":"30028", "name":"Pabilsag", "lv1":"751 960 830 860 800 890"}
             , {"id":"30030", "name":"Qiong-Ji", "lv1":"890 784 982 778 932 882"}
             , {"id":"30031", "name":"Revenant", "lv1":"999 777 957 798 782 807"}
             , {"id":"30033", "name":"Fafnir", "lv1":"858 764 878 861 768 767"}
             , {"id":"30034", "name":"Jotunn", "lv1":"940 770 932 882 765 856"}
             , {"id":"30035", "name":"Specter", "lv1":"790 957 815 815 798 907"}
             , {"id":"30037", "name":"Talos", "lv1":"949 767 957 940 771 798"}
             , {"id":"30038", "name":"Power", "lv1":"896 913 1010 830 858 876"}
             , {"id":"30039", "name":"- Thunder God Dongo", "lv1":"894 921 895 785 869 843"}
             , {"id":"30040", "name":"Anahita", "lv1":"929 846 779 885 843 871"}
             , {"id":"30041", "name":"Peri", "lv1":"861 894 795 825 851 920"}
             , {"id":"30042", "name":"Virtus", "lv1":"859 847 881 929 786 843"}
             , {"id":"30043", "name":"Caim", "lv1":"845 905 815 863 844 943"}
             , {"id":"30044", "name":"Brigid", "lv1":"825 929 789 887 833 929"}
             ]

  , clearStat = function(unit_id, chr) {
      for (var i = 0, il = s_stat.length; i < il; i++) {
        for (var j = 0, jl = s_attr.length; j < jl; j++) {
          $('#' + s_stat[i] + '-' + s_attr[j] + '-' + unit_id).html(chr).removeClass('best-1').removeClass('best-2').removeClass('worst-1')
        }
      }
    }

  , setGuardianType = function(unit_id, type) {
      var select = $('#type-' + unit_id)
        , options = select.prop('options')

      select.find('option').remove()
      if (type == 'P') {
        options[options.length] = new Option('Cool', 'Cool')
      } else {
        for (var i = 0, il = g_type.length; i < il; i++) {
          options[options.length] = new Option(g_type[i].id, g_type[i].id)
        }
      }
      select.trigger('change')
    }

  , sortGuardianName = function(unit_id) {
      var star = $('#star-' + unit_id).val()
        , sort_type = $('#sort-' + unit_id).val()
        , select = $('#name-' + unit_id)
        , options = select.prop('options')
        , g_name = g_name_6
        , data = []

      setGuardianType(unit_id, star)
      switch (star) {
        case '5':
          g_name = g_name_5
          break
        case '4':
          g_name = g_name_4
          break
        case 'C':
          g_name = g_name_c
          break
        case 'P':
          g_name = g_name_p
          break
      }

      for (var i = 0, il = g_name.length; i < il; i++) {
        var g_id = g_name[i]
          , name = ''
          , stat_lv1 = ''

        for (var j = 0, jl = g_stat.length; j < jl; j++) {
          if (g_id == g_stat[j].id) {
            stat_lv1 = g_stat[j].lv1
            name = g_stat[j].name
          }
        }

        if (sort_type > 0) {
          var lv1 = stat_lv1.split(' ')
          data.push([g_id, lv1[sort_type - 1], name])
        } else {
          data.push([g_id, 0, name])
        }
      }
      if (sort_type > 0) {
        data.sort(function(a, b) {return b[1] - a[1]})
      }
      select.find('option').remove()
      options[options.length] = new Option('Guardian Name', '0')
      for (i = 0, il = data.length; i < il; i++) {
        options[options.length] = new Option(data[i][2], data[i][0])
      }
      select.trigger('change').select2('focus')
    }

  , getStat = function(unit_id) {
      var g_id = $('#name-' + unit_id).val()
        , t_id = $('#type-' + unit_id).val()
        , stat_lv1 = ''
        , stat_multiplier = ''

        , setStatColor = function(data) {
            data.sort(function(a, b) {return b[1] - a[1]})
            for (var i = 0, il = data.length; i < il; i++) {
              if (i === 0) {
                $(data[i][0]).addClass('best-1')
              }
              if (i == 1) {
                $(data[i][0]).addClass('best-2')
              }
              if (i == 5) {
                $(data[i][0]).addClass('worst-1')
              }
            }
          }

      clearStat(unit_id, '0')
      for (var i = 0, il = g_stat.length; i < il; i++) {
        if (g_id == g_stat[i].id) {
          stat_lv1 = g_stat[i].lv1
        }
      }
      if (stat_lv1 !== '') {
        for (var j = 0; j < 8; j++) {
          if (t_id == g_type[j].id) {
            stat_multiplier = g_type[j].stat
          }
        }
        var lv1 = stat_lv1.split(' ')
          , multiplier = stat_multiplier.split(' ')

        for (i = 0; i < 5; i++) {
          var data = []
          for (j = 0; j < 6; j++) {
            var s_id = '#' + s_stat[i] + '-' + s_attr[j] + '-' + unit_id
              , s_lv1 = lv1[j]
              , s_mul = parseFloat(multiplier[j])
              , s_value = s_lv1

            switch (s_stat[i]) {
              case 'base':
                break
              case 'type':
                s_value *= s_mul
                break
              case 'cool':
                s_value *= 2.5
                break
              case 'stat':
                s_value = Math.floor(s_lv1 * 2.5) * s_mul
                break
              case 'max':
                s_value = Math.floor(s_lv1 * 2.5) * s_mul
                s_value += Math.floor(s_lv1 / 2)
                break
            }
            var v = Math.floor(s_value)
            data.push([s_id, v])
            $(s_id).html(v)
          }
          setStatColor(data)
        }
      }
    }

  , g_sort_change = function(event) {
      sortGuardianName(event.data.unit_id)
      clearStat(event.data.unit_id, '0')
    }

  , g_change = function(event) {
      getStat(event.data.unit_id)
    }

sortGuardianName('1', '0')
$('#star-1').select2({minimumResultsForSearch: 6}).on('change', {unit_id: '1'}, g_sort_change)
$('#name-1').select2().on('change', {unit_id: '1'}, g_change)
$('#type-1').select2({minimumResultsForSearch: 10}).on('change', {unit_id: '1'}, g_change)
$('#sort-1').select2({minimumResultsForSearch: 8}).on('change', {unit_id: '1'}, g_sort_change)
sortGuardianName('2', '0')
$('#star-2').select2({minimumResultsForSearch: 6}).on('change', {unit_id: '2'}, g_sort_change)
$('#name-2').select2().on('change', {unit_id: '2'}, g_change)
$('#type-2').select2({minimumResultsForSearch: 10}).on('change', {unit_id: '2'}, g_change)
$('#sort-2').select2({minimumResultsForSearch: 8}).on('change', {unit_id: '2'}, g_sort_change)
sortGuardianName('3', '0')
$('#star-3').select2({minimumResultsForSearch: 6}).on('change', {unit_id: '3'}, g_sort_change)
$('#name-3').select2().on('change', {unit_id: '3'}, g_change)
$('#type-3').select2({minimumResultsForSearch: 10}).on('change', {unit_id: '3'}, g_change)
$('#sort-3').select2({minimumResultsForSearch: 8}).on('change', {unit_id: '3'}, g_sort_change)
sortGuardianName('4', '0')
$('#star-4').select2({minimumResultsForSearch: 6}).on('change', {unit_id: '4'}, g_sort_change)
$('#name-4').select2().on('change', {unit_id: '4'}, g_change)
$('#type-4').select2({minimumResultsForSearch: 10}).on('change', {unit_id: '4'}, g_change)
$('#sort-4').select2({minimumResultsForSearch: 8}).on('change', {unit_id: '4'}, g_sort_change)
