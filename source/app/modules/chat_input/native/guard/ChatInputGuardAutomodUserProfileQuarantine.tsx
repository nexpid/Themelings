// app/modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function ChatInputGuardAutomodUserProfileQuarantine(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var10 = var2.guildId;
            var _closure2_slot0 = var10;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 5;
            var3 = var5[var3];
            var4 = undefined;
            var11 = var2.bind(var4)(var3);
            var9 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(2);
            var8[0] = var3;
            var3 = _closure1_slot5;
            var8[1] = var3;
            var7 = new Array(1);
            var7[0] = var10;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure1_slot4;
                    var2 = var3.getId;
                    var6 = var2.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.getAutomodQuarantinedGuildMemberFlags;
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var1, var6);
                    var1 = var2.bind(var3)(var1);
                    return var1;
case 2:
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var9 = var2;
                    var1 = new var9[var1](var8);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                }
            };
            var3 = var9.bind(var11)(var8, var3, var7);
            var9 = _closure1_slot3;
            var8 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openAutomodProfileQuarantineAlert;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var9 = var8.bind(var9)(var1, var7);
            var1 = 6;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getAutomodReason;
            var2 = var1.bind(var2)(var3);
            var1 = _closure1_slot6;
            var1 = var1.AUTOMOD_QUARANTINED_SERVER_TAG;
            if(!(var2 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var3 = var8[var1];
            var3 = var7.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1./PGQf3;
            var7 = var3.bind(var5)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var3 = var10[var1];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.Viksoq;
            var7 = var3.bind(var5)(var1);
case 6:
            var1 = _closure1_slot6;
            var1 = var1.AUTOMOD_QUARANTINED_SERVER_TAG;
            if(!(var2 !== var1)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 8;
            var2 = var8[var1];
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.8HW7r6;
            var5 = var2.bind(var3)(var1);
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var2 = var10[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var10[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.ml72ZW;
            var5 = var2.bind(var3)(var1);
case 9:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = 'simple-action';
            var1['type'] = var10;
            var1['actionOnPress'] = var9;
            var1['actionLabel'] = var7;
            var7 = _closure1_slot0;
            var6 = 10;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ChatXIcon;
            var6 = {};
            var6 = var3.bind(var4)(var7, var6);
            var1['icon'] = var6;
            var1['message'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/guard/ChatInputGuardAutomodUserProfileQuarantine.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();