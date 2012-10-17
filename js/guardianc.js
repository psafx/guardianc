var s_stat = [
      "base",
      "type",
      "cool",
      "stat",
      "max"
    ],
    s_attr = [
      "hp",
      "mp",
      "atk",
      "def",
      "agi",
      "wis"
    ],
    g_name_p = [
      {"g_id":"800001", "g_name":"Load of the Inferno"},
      {"g_id":"800002", "g_name":"Cerberus"},
    ],
    g_name_c = [
      {"g_id":"100011", "g_name":"Almighty Leviathan"},
      {"g_id":"100012", "g_name":"Mighty Leviathan"},
      {"g_id":"100021", "g_name":"Almighty Titan"},
      {"g_id":"100022", "g_name":"Mighty Titan"},
      {"g_id":"100031", "g_name":"Almighty Ifrit"},
      {"g_id":"100032", "g_name":"Mighty Ifrit"},
      {"g_id":"100041", "g_name":"Almighty Valkyrie"},
      {"g_id":"100042", "g_name":"Mighty Valkyrie"},
      {"g_id":"100051", "g_name":"Almighty Pumpkin Chunkin' Titan"},
      {"g_id":"100052", "g_name":"Mighty Pumpkin Chunkin' Titan"},
      {"g_id":"100053", "g_name":"Great Pumpkin Chunkin' Titan"},
    ],
    g_name_5 = [
      {"g_id":"900001", "g_name":"Bahamut"},
      {"g_id":"040012", "g_name":"Leviathan"},
      {"g_id":"040003", "g_name":"Titan"},
      {"g_id":"040007", "g_name":"Vampire Matron"},
      {"g_id":"040011", "g_name":"Phoenix"},
      {"g_id":"040002", "g_name":"Valkyrie"},
      {"g_id":"040001", "g_name":"Ifrit"},
      {"g_id":"040004", "g_name":"Lightning Lord"},
      {"g_id":"040008", "g_name":"Juggernaut"},
      {"g_id":"040009", "g_name":"Dominion"},
      {"g_id":"040010", "g_name":"Mephistopheles"},
      {"g_id":"040017", "g_name":"Apsara"},
      {"g_id":"040019", "g_name":"Azi Dahaka"},
      {"g_id":"040020", "g_name":"Garguntua"},
      {"g_id":"040025", "g_name":"Frankenstein"},
    ],
    g_name_4 = [
      {"g_id":"030003", "g_name":"Kraken"},
      {"g_id":"030006", "g_name":"Jormungandr"},
      {"g_id":"030008", "g_name":"Hecatoncheir"},
      {"g_id":"030009", "g_name":"Ramiel"},
      {"g_id":"030013", "g_name":"Vampire"},
      {"g_id":"030017", "g_name":"Angel"},
      {"g_id":"030027", "g_name":"Pazuzu"},
      {"g_id":"030005", "g_name":"Golem"},
      {"g_id":"030010", "g_name":"Garuda"},
      {"g_id":"030011", "g_name":"Wyvern"},
      {"g_id":"030012", "g_name":"Medusa"},
      {"g_id":"030018", "g_name":"Fenrir"},
      {"g_id":"030025", "g_name":"Giant"},
      {"g_id":"030026", "g_name":"Dullahan"},
      {"g_id":"030028", "g_name":"Pabilsag"},
      {"g_id":"030001", "g_name":"Suzaku"},
      {"g_id":"030004", "g_name":"Genbu"},
      {"g_id":"030007", "g_name":"Seiryu"},
      {"g_id":"030015", "g_name":"Byakko"},
      {"g_id":"030030", "g_name":"Qiong-Ji"},
      {"g_id":"030031", "g_name":"Revenant"},
    ],
    g_type = [
      {"t_id":"Ace", "t_stat":"1.1 1.1 1.1 1.1 1.1 1.1"},
      {"t_id":"Cool", "t_stat":"1 1 1 1 1 1"},
      {"t_id":"Chaotic", "t_stat":"1.1 1 1 1 1 0.9"},
      {"t_id":"Sexy", "t_stat":"0.9 1.1 1 1 1 1"},
      {"t_id":"Powerful", "t_stat":"1 1 1.1 1 0.9 1"},
      {"t_id":"Brave", "t_stat":"1 0.9 1 1.1 1 1"},
      {"t_id":"Fast", "t_stat":"1 1 1 0.9 1.1 1"},
      {"t_id":"Intelligent", "t_stat":"1 1 0.9 1 1 1.1"}
    ],
    g_stat = [
      {"g_id":"900001", "lv1":"1020 1032 1134 978 1025 1050"},
      {"g_id":"800001", "lv1":"1030 1005 1069 1051 957 946"},
      {"g_id":"800002", "lv1":"856 808 877 857 851 846"},
      {"g_id":"100011", "lv1":"1090 1066 1260 1129 981 947"},
      {"g_id":"100012", "lv1":"1025 1015 1154 1080 900 920"},
      {"g_id":"100021", "lv1":"1400 1025 1070 1060 910 910"},
      {"g_id":"100022", "lv1":"1200 1025 1070 1060 910 910"},
      {"g_id":"100031", "lv1":"1060 1055 1134 1105 966 966"},
      {"g_id":"100032", "lv1":"1010 1005 1080 1050 920 920"},
      {"g_id":"100041", "lv1":"957 1114 1029 1024 1090 1130"},
      {"g_id":"100042", "lv1":"930 1082 999 995 1059 1098"},
      {"g_id":"100051", "lv1":"1800 1025 1070 1060 910 910"},
      {"g_id":"100052", "lv1":"1400 1025 1070 1060 910 910"},
      {"g_id":"100053", "lv1":"1120 1025 1070 1060 910 910"},
      {"g_id":"040012", "lv1":"1025 1015 1050 1080 900 920"},
      {"g_id":"040003", "lv1":"1050 1025 1070 1060 910 910"},
      {"g_id":"040007", "lv1":"1008 1007 980 960 1008 1002"},
      {"g_id":"040011", "lv1":"952 934 980 1020 1084 1016"},
      {"g_id":"040002", "lv1":"912 1061 980 976 1039 1077"},
      {"g_id":"040001", "lv1":"1010 1005 1080 1050 920 920"},
      {"g_id":"040004", "lv1":"950 1002 1050 1030 1070 950"},
      {"g_id":"040008", "lv1":"850 868 1110 1150 852 880"},
      {"g_id":"040009", "lv1":"920 1020 1127 1068 1008 1148"},
      {"g_id":"040010", "lv1":"900 1138 940 950 976 1050"},
      {"g_id":"040017", "lv1":"914 1170 912 910 1062 1130"},
      {"g_id":"040019", "lv1":"1140 1030 1060 913 911 1070"},
      {"g_id":"040020", "lv1":"1210 914 1200 1020 915 940"},
      {"g_id":"040025", "lv1":"1130 911 1130 1100 955 970"},
      {"g_id":"030003", "lv1":"830 720 915 800 760 780"},
      {"g_id":"030006", "lv1":"924 896 820 850 790 829"},
      {"g_id":"030008", "lv1":"822 835 899 850 830 851"},
      {"g_id":"030009", "lv1":"800 802 816 773 816 803"},
      {"g_id":"030013", "lv1":"835 914 906 835 882 910"},
      {"g_id":"030017", "lv1":"764 873 860 751 866 924"},
      {"g_id":"030027", "lv1":"742 815 860 804 802 789"},
      {"g_id":"030005", "lv1":"966 820 966 966 800 760"},
      {"g_id":"030010", "lv1":"848 872 848 796 886 848"},
      {"g_id":"030011", "lv1":"774 798 866 850 890 842"},
      {"g_id":"030012", "lv1":"819 882 824 820 844 823"},
      {"g_id":"030018", "lv1":"792 754 852 792 848 760"},
      {"g_id":"030025", "lv1":"892 760 872 774 766 764"},
      {"g_id":"030026", "lv1":"828 877 864 886 812 841"},
      {"g_id":"030028", "lv1":"751 960 830 860 800 890"},
      {"g_id":"030001", "lv1":"794 898 830 866 912 892"},
      {"g_id":"030004", "lv1":"868 902 810 940 830 880"},
      {"g_id":"030007", "lv1":"868 794 889 900 903 862"},
      {"g_id":"030015", "lv1":"869 822 895 902 840 893"},
      {"g_id":"030030", "lv1":"890 784 982 778 932 882"},
      {"g_id":"030031", "lv1":"999 777 957 798 782 807"},
    ],
    clearStat = function(unit_id, chr) {
      $.each(s_stat, function(s_index, s_value) {
        $.each(s_attr, function(a_index, a_value) {
          $('#' + s_value + '-' + a_value + '-' + unit_id).html(chr).removeClass('best-1').removeClass('best-2').removeClass('worst-1')
        })
      })
    },
    setGuardianType = function(unit_id, type) {
      var select = $('#g-type-' + unit_id)
      if (select.prop) {
        var options = select.prop('options')
      } else {
        var options = select.attr('options')
      }
      select.find('option').remove()
      if (type == 'P') {
        options[options.length] = new Option('Cool', 'Cool')
      } else {
        $.each(g_type, function(index, value) {
          options[options.length] = new Option(value['t_id'], value['t_id'])
        })
      }
      select.trigger('liszt:updated')
    },
    setGuardianName = function(unit_id, star) {
      var select = $('#g-name-' + unit_id),
          g_name = g_name_5
      if (select.prop) {
        var options = select.prop('options')
      } else {
        var options = select.attr('options')
      }
      switch (star) {
        case '5':
          setGuardianType(unit_id, '5')
          break;
        case '4':
          g_name = g_name_4
          setGuardianType(unit_id, '4')
          break;
        case 'C':
          g_name = g_name_c
          setGuardianType(unit_id, 'C')
          break;
        case 'P':
          g_name = g_name_p
          setGuardianType(unit_id, 'P')
          break;
      }
      select.find('option').remove()
      options[options.length] = new Option('Guardian Name', '0')
      $.each(g_name, function(index, value) {
        options[options.length] = new Option(value['g_name'], value['g_id'])
      })
      select.trigger('liszt:updated')
    },
    getStat = function(unit_id) {
      var g_id = $('#g-name-' + unit_id).val(),
          t_id = $('#g-type-' + unit_id).val(),
          stat_lv1 = '',
          stat_multiplier = '',
          setStatColor = function(data) {
            $.each(data, function(index, value) {
              if (index == 0) {
                $(value[0]).addClass('best-1')
              }
              if (index == 1) {
                $(value[0]).addClass('best-2')
              }
              if (index == 5) {
                $(value[0]).addClass('worst-1')
              }
            })
          }

      clearStat(unit_id, '0')
      for (var i = 0, j = g_stat.length; i < j; i++) {
        if (g_id == g_stat[i]['g_id']) {
          stat_lv1 = g_stat[i]['lv1']
        }
      }
      if (stat_lv1 != '') {
        for (var i = 0, j = g_type.length; i < j; i++) {
          if (t_id == g_type[i]['t_id']) {
            stat_multiplier = g_type[i]['t_stat']
          }
        }
        var multiplier = stat_multiplier.split(' '),
            lv1 = stat_lv1.split(' ')
        $.each(s_stat, function(s_index, s_value) {
          var temp = []
          $.each(s_attr, function(a_index, a_value) {
            var e_id = '#' + s_value + '-' + a_value + '-' + unit_id,
                e_value = lv1[a_index]
            switch (s_value) {
              case 'base':
                break;
              case 'type':
                e_value *= multiplier[a_index]
                break;
              case 'cool':
                e_value *= 2.5
                break;
              case 'stat':
                e_value *= multiplier[a_index] * 2.5
                break;
              case 'max':
                e_value *= multiplier[a_index] * 2.5
                e_value += (lv1[a_index] / 2)
                break;
            }
            temp.push([e_id, e_value])
            $(e_id).html(Math.floor(e_value))
          })
          temp.sort(function(a, b) {return b[1] - a[1]})
          setStatColor(temp)
        })
      }
    },
    changeStar = function(unit_id, star) {
      setGuardianName(unit_id, star)
      clearStat(unit_id, '0')
    },
    g_star_change = function(event, data) {
      changeStar(event.data.unit_id, data.selected)
    },
    g_change = function(event) {
      getStat(event.data.unit_id)
    }
