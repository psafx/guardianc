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
               , "30021"
               ]

  , g_name_c = [ "40072"
               , "40073"
               , "40074"
               , "40028"
               , "40029"
               , "40015"
               , "40059"
               , "40016"
               , "40062"
               , "40067"
               , "40068"
               , "40069"
               , "40039"
               , "40040"
               ]

  , g_name_6 = [ "40022"
               , "40017"
               , "40019"
               , "40072"
               , "40073"
               , "40074"
               , "40030"
               , "40009"
               , "40025"
               , "40024"
               , "40020"
               , "40001"
               , "40028"
               , "40029"
               , "40008"
               , "40002"
               , "40015"
               , "40059"
               , "40004"
               , "40010"
               , "40011"
               , "40023"
               , "40018"
               , "40021"
               , "40003"
               , "40016"
               , "40062"
               , "40067"
               , "40068"
               , "40069"
               , "40007"
               , "40012"
               , "40039"
               , "40040"
               ]

  , g_name_5 = [ "40022"
               , "40017"
               , "40019"
               , "40030"
               , "40009"
               , "40025"
               , "40024"
               , "40020"
               , "40001"
               , "40008"
               , "40002"
               , "40004"
               , "40010"
               , "40011"
               , "40023"
               , "40018"
               , "40021"
               , "40003"
               , "40007"
               , "40012"
               ]

  , g_name_4 = [ "30017"
               , "30015"
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
             , {"id":"40014", "name":"Midgardsormr", "lv1":"1030 1005 1069 1051 957 946"}
             , {"id":"40015", "name":"Almighty Leviathan", "lv1":"1090 1066 1260 1129 981 947"}
             , {"id":"40016", "name":"Almighty Titan", "lv1":"1400 1025 1070 1060 910 910"}
             , {"id":"40017", "name":"Apsara", "lv1":"914 1170 912 910 1062 1130"}
             , {"id":"40018", "name":"Stymphalian Bird", "lv1":"1023 910 1037 1004 1127 912"}
             , {"id":"40019", "name":"Azi Dahaka", "lv1":"1140 1030 1060 913 911 1070"}
             , {"id":"40020", "name":"Gargantua", "lv1":"1210 914 1200 1020 915 940"}
             , {"id":"40021", "name":"Shiva", "lv1":"1083 1183 1002 1028 985 1200"}
             , {"id":"40022", "name":"Atlas", "lv1":"1160 930 1150 1090 967 911"}
             , {"id":"40023", "name":"Raijin", "lv1":"1110 980 1120 1020 1030 980"}
             , {"id":"40024", "name":"Fujin", "lv1":"1010 1020 1030 1030 950 1020"}
             , {"id":"40025", "name":"Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40026", "name":"Almighty Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40027", "name":"Mighty Frankenstein", "lv1":"1130 911 1130 1100 955 970"}
             , {"id":"40028", "name":"Almighty Ifrit", "lv1":"1060 1055 1134 1105 966 966"}
             , {"id":"40029", "name":"Mighty Ifrit", "lv1":"1010 1005 1080 1050 920 920"}
             , {"id":"40030", "name":"Bahamut", "lv1":"1000 1006 1111 954 999 1028"}
             , {"id":"40039", "name":"Almighty Valkyrie", "lv1":"957 1114 1029 1024 1090 1130"}
             , {"id":"40040", "name":"Mighty Valkyrie", "lv1":"930 1082 999 995 1059 1098"}
             , {"id":"40059", "name":"Mighty Leviathan", "lv1":"1025 1015 1154 1080 900 920"}
             , {"id":"40062", "name":"Mighty Titan", "lv1":"1200 1025 1070 1060 910 910"}
             , {"id":"40067", "name":"Almighty Pumpkin Chuckin' Titan", "lv1":"1500 1025 1070 1060 910 910"}
             , {"id":"40068", "name":"Mighty Pumpkin Chuckin' Titan", "lv1":"1230 1025 1070 1060 910 910"}
             , {"id":"40069", "name":"Great Pumpkin Chuckin' Titan", "lv1":"1080 1025 1070 1060 910 910"}
             , {"id":"40072", "name":"Almighty Banshee Witch", "lv1":"1117 930 966 1001 1005 1200"}
             , {"id":"40073", "name":"Mighty Banshee Witch", "lv1":"1047 930 966 1001 1005 1099"}
             , {"id":"40074", "name":"Great Banshee Witch", "lv1":"998 930 966 1001 1005 965"}
             , {"id":"40081", "name":"Archfiend Aji Dahaja", "lv1":"1 1 1 1 1 1"}
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
             , {"id":"30014", "name":"Lich", "lv1":"1 1 1 1 1 1"}
             , {"id":"30015", "name":"Byakko", "lv1":"869 822 895 902 840 893"}
             , {"id":"30017", "name":"Angel", "lv1":"764 873 860 751 866 924"}
             , {"id":"30018", "name":"Fenrir", "lv1":"792 754 852 792 848 760"}
             , {"id":"30021", "name":"Cerberus", "lv1":"856 808 877 857 851 846"}
             , {"id":"30022", "name":"Behemoth", "lv1":"1 1 1 1 1 1"}
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
        for (var j = 0, jl = g_type.length; j < jl; j++) {
          if (t_id == g_type[j].id) {
            stat_multiplier = g_type[j].stat
          }
        }
        var lv1 = stat_lv1.split(' ')
          , multiplier = stat_multiplier.split(' ')

        for (i = 0; i < il; i++) {
          var data = []
          for (j = 0; j < jl; j++) {
            var s_id = '#' + s_stat[i] + '-' + s_attr[j] + '-' + unit_id
              , s_lv1 = lv1[j]
              , s_mul = multiplier[j]
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
                s_value *= 2.5 * s_mul
                break
              case 'max':
                s_value *= 2.5 * s_mul
                s_value += (s_lv1 / 2)
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
