// app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 2, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['cardDetails'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActivitySubtitle.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function HappeningNowVoiceCardSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var2 = var2.voiceState;
            var _closure2_slot0 = var2;
            var2 = _closure1_slot7;
            var4 = undefined;
            var5 = var2.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 6;
            var2 = var8[var2];
            var7 = var6.bind(var4)(var2);
            var3 = var7.useStateFromStores;
            var10 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var11 = var3.bind(var7)(var2, var1);
            var2 = _closure1_slot1;
            var1 = 7;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var7 = var1.bind(var4)(var11);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.cardDetails;
            var1['style'] = var5;
            var5 = 8;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.HappeningNowCardSubtitle;
            var5 = {};
            var8 = 1;
            var5['lineClamp'] = var8;
            var8 = null;
            var10 = var8 != var11;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var9 = 9;
            var9 = var12[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['channel'] = var11;
            var8 = var10.bind(var4)(var9);
case 2:
            var5['accessibilityLabel'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowVoiceCardSubtitle'] = var4;
    var2 = function HappeningNowActivityCardSubtitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var2 = var1.activity;
            var3 = var1.stream;
            var1 = null;
            if(!(var1 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = var2.type;
            var4 = _closure1_slot5;
            var4 = var4.CUSTOM_STATUS;
            if(!(var5 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 4:
            if(!(var1 == var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var5 = var1 == var2;
            var4 = undefined;
            var3 = undefined;
            if(var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var3 = var2.name;
case 9:
            var3 = var1 == var3;
            var5 = null;
            if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 11;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.bind(var4)(var2);
            if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 12;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.bind(var4)(var2);
            if(!var3) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = var2.details;
            if(!(var1 != var3)) { _fun0002_ip = 15; continue _fun0002 }
case 17:
            var3 = var2.state;
            if(!(var1 == var3)) { _fun0002_ip = 18; continue _fun0002 }
case 15:
            var3 = var2.name;
            _fun0002_ip = 19; continue _fun0002;
case 18:
            var9 = var2.details;
            var8 = var2.state;
            var4 = global;
            var4 = var4.HermesInternal;
            var7 = var4.concat;
            var6 = '';
            var4 = ' - ';
            var3 = var7.bind(var6)(var9, var4, var8);
case 19:
            _fun0002_ip = 20; continue _fun0002;
case 13:
            var4 = var2.details;
            if(!(var1 != var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var2.details;
            var4 = '';
            if(!(var4 === var6)) { _fun0002_ip = 23; continue _fun0002 }
case 21:
            var4 = var2.name;
            _fun0002_ip = 24; continue _fun0002;
case 23:
            var4 = var2.details;
case 24:
            var3 = var4;
case 20:
            var5 = var3;
case 11:
            _fun0002_ip = 25; continue _fun0002;
case 7:
            if(!(var1 != var2)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = var2.type;
            var3 = _closure1_slot5;
            var3 = var3.PLAYING;
            if(!(var4 === var3)) { _fun0002_ip = 26; continue _fun0002 }
case 28:
            var3 = var2.name;
            _fun0002_ip = 29; continue _fun0002;
case 26:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var6 = var10[var4];
            var8 = undefined;
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var8)(var4);
            var4 = var4.t;
            var4 = var4.eXan7B;
            var3 = var6.bind(var7)(var4);
case 29:
            var5 = var3;
case 25:
            _fun0002_ip = 30; continue _fun0002;
case 6:
            var3 = var2.state;
            var3 = var1 != var3;
            var1 = null;
            if(!var3) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var3 = var2.state;
            var2 = var3.trim;
            var1 = var2.bind(var3)();
case 31:
            var5 = var1;
case 30:
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.HappeningNowCardSubtitle;
            var1 = {};
            var6 = 1;
            var1['lineClamp'] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['HappeningNowActivityCardSubtitle'] = var2;
    return var1;
})();