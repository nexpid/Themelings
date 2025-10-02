// app/modules/user_profile/native/UserProfileVoiceActivityIcon.tsx
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileVoiceActivityIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileVoiceActivityIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = var4.channel;
            var _closure2_slot0 = var6;
            var1 = null;
            var3 = Object.create(var1);
            var1 = 0;
            var3['channel'] = var1;
            var12 = {};
            var11 = var4;
            var10 = var3;
            var5 = copyDataProperties(var12, var11, var10);
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var7.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot3;
                    var4 = var5.can;
                    var3 = _closure1_slot4;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var2 = var7.bind(var8)(var3, var2);
            var3 = var6.isDM;
            var3 = var3.bind(var6)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var6.isGroupDM;
            var3 = var3.bind(var6)();
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var3 = var6.isGuildStageVoice;
            var3 = var3.bind(var6)();
            var2 = !var2;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var7 = var8.bind(var4)(var7);
            var2 = var7.bind(var4)(var6);
case 7:
            if(!var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 9:
            if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var6.isNSFW;
            var3 = var3.bind(var6)();
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(var2) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = 11;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.VoiceNormalIcon;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var2 = 10;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.VoiceLockIcon;
case 18:
            var2 = {};
            var12 = var2;
            var11 = var5;
            var9 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 19; continue _fun0001;
case 14:
            var3 = 9;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.VoiceWarningIcon;
            var3 = {};
            var12 = var3;
            var11 = var5;
            var8 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var6, var3);
case 19:
            _fun0001_ip = 20; continue _fun0001;
case 12:
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 8;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.StageIcon;
            var3 = {};
            var12 = var3;
            var11 = var5;
            var8 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var6, var3);
case 20:
            _fun0001_ip = 21; continue _fun0001;
case 11:
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.StageLockIcon;
            var3 = {};
            var12 = var3;
            var11 = var5;
            var8 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var6, var3);
case 21:
            return var2;
case 4:
            var3 = _closure1_slot5;
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PhoneCallIcon;
            var1 = {};
            var12 = var1;
            var11 = var5;
            var5 = copyDataProperties(var12, var11);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();