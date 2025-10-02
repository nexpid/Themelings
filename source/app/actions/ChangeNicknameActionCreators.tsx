// app/actions/ChangeNicknameActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var2 = var2.Endpoints;
    var _closure1_slot3 = var2;
    var2 = {};
    var4 = function changeNickname(arg1, arg2, arg3, arg4) {
        var6 = arg4;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.patch;
        var2 = {};
        var9 = _closure1_slot3;
        var8 = var9.GUILD_MEMBER_NICK;
        var7 = arg1;
        var5 = arg3;
        var5 = var8.bind(var9)(var7, var5);
        var2['url'] = var5;
        var5 = {};
        var5['nick'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var1 = var1.body;
                var1 = var1.nick;
                _closure2_slot1 = var1;
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.sendBotMessage;
                var3 = _closure2_slot0;
                var7 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var7 = _closure2_slot1;
                var2 = '';
                if(!(var2 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var2 = 3;
                var7 = var11[var2];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var2 = var11[var2];
                var2 = var9.bind(var1)(var2);
                var2 = var2.t;
                var2 = var2.Vhpd9P;
                var2 = var7.bind(var8)(var2);
                _fun0001_ip = 5; continue _fun0001;
case 4:
                var7 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 3;
                var8 = var11[var6];
                var8 = var7.bind(var1)(var8);
                var9 = var8.intl;
                var8 = var9.formatToMarkdownString;
                var6 = var11[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.t;
                var7 = var6.gz+HRk;
                var6 = {};
                var10 = _closure2_slot1;
                var6['nick'] = var10;
                var2 = var8.bind(var9)(var7, var6);
case 5:
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var2 = var1.status;
                var1 = 403;
                if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 2;
                var2 = var9[var2];
                var8 = undefined;
                var4 = var3.bind(var8)(var2);
                var3 = var4.sendBotMessage;
                var2 = _closure2_slot0;
                var7 = _closure1_slot0;
                var1 = 3;
                var5 = var9[var1];
                var5 = var7.bind(var8)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var1 = var9[var1];
                var1 = var7.bind(var8)(var1);
                var1 = var1.t;
                var1 = var1.5LO/Sk;
                var1 = var5.bind(var6)(var1);
                var1 = var3.bind(var4)(var2, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 2;
                var2 = var9[var2];
                var8 = undefined;
                var4 = var3.bind(var8)(var2);
                var3 = var4.sendBotMessage;
                var2 = _closure2_slot0;
                var5 = _closure1_slot0;
                var1 = 3;
                var6 = var9[var1];
                var6 = var5.bind(var8)(var6);
                var7 = var6.intl;
                var6 = var7.formatToMarkdownString;
                var1 = var9[var1];
                var1 = var5.bind(var8)(var1);
                var1 = var1.t;
                var5 = var1.Izf9jI;
                var1 = {};
                var1 = var6.bind(var7)(var5, var1);
                var1 = var3.bind(var4)(var2, var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['changeNickname'] = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ChangeNicknameActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();