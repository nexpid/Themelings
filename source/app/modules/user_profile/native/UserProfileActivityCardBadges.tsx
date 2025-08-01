// app/modules/user_profile/native/UserProfileActivityCardBadges.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityTypes;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileActivityCardBadges.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileActivityCardBadges(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.activity;
            var _closure2_slot0 = var1;
            var6 = var3.style;
            var5 = var1.type;
            var4 = _closure1_slot3;
            var4 = var4.PLAYING;
            if(!(var5 !== var4)) { _fun0001_ip = 190; continue _fun0001 }
 45:
            var5 = var1.type;
            var4 = _closure1_slot3;
            var4 = var4.LISTENING;
            if(!(var5 !== var4)) { _fun0001_ip = 149; continue _fun0001 }
 64:
            var4 = var1.type;
            var1 = _closure1_slot3;
            var1 = var1.WATCHING;
            if(!(var4 !== var1)) { _fun0001_ip = 89; continue _fun0001 }
 83:
            var7 = new Array(0);
            _fun0001_ip = 147; continue _fun0001;
 89:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 4;
            var1 = var9[var4];
            var5 = undefined;
            var1 = var8.bind(var5)(var1);
            var10 = var1.TimestampBadge;
            var1 = new Array(2);
            var1[0] = var10;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.EpisodeBadge;
            var1[1] = var4;
            var7 = var1;
 147:
            _fun0001_ip = 188; continue _fun0001;
 149:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var4 = var4[var1];
            var1 = undefined;
            var1 = var5.bind(var1)(var4);
            var4 = var1.TimestampBadge;
            var1 = new Array(1);
            var1[0] = var4;
            var7 = var1;
 188:
            _fun0001_ip = 248; continue _fun0001;
 190:
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var4 = 4;
            var1 = var9[var4];
            var5 = undefined;
            var1 = var8.bind(var5)(var1);
            var10 = var1.TimestampBadge;
            var1 = new Array(2);
            var1[0] = var10;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var4 = var4.PartyBadge;
            var1[1] = var4;
            var7 = var1;
 248:
            var5 = var7.length;
            var4 = 0;
            var1 = null;
            if(!(var4 !== var5)) { _fun0001_ip = 302; continue _fun0001 }
 261:
            var5 = _closure1_slot4;
            var4 = _closure1_slot2;
            var3 = {};
            var3['style'] = var6;
            var6 = var7.map;
            var2 = function(arg1, arg2) {
                var5 = _closure1_slot4;
                var4 = {};
                var1 = _closure2_slot0;
                var4['activity'] = var1;
                var3 = undefined;
                var2 = arg1;
                var1 = arg2;
                var1 = var5.bind(var3)(var2, var4, var1);
                return var1;
            };
            var2 = var6.bind(var7)(var2);
            var3['children'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
 302:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();