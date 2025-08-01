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
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileVoiceActivityIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserProfileVoiceActivityIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var7 = var4.channel;
            var _closure2_slot0 = var7;
            var1 = null;
            var3 = Object.create(var1);
            var1 = 0;
            var3['channel'] = var1;
            var12 = {};
            var11 = var4;
            var10 = var3;
            var5 = copyDataProperties(var12, var11, var10);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 4;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var6 = var8.useStateFromStores;
            var9 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 53; continue _fun0002 }
 20:
                    var5 = _closure1_slot3;
                    var4 = var5.can;
                    var3 = _closure1_slot4;
                    var3 = var3.CONNECT;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
 53:
                    return var1;
                }
            };
            var2 = var6.bind(var8)(var3, var2);
            var3 = var7.isDM;
            var3 = var3.bind(var7)();
            if(var3) { _fun0001_ip = 423; continue _fun0001 }
 106:
            var3 = var7.isGroupDM;
            var3 = var3.bind(var7)();
            if(var3) { _fun0001_ip = 423; continue _fun0001 }
 122:
            var3 = var7.isGuildStageVoice;
            var3 = var3.bind(var7)();
            var2 = !var2;
            if(var2) { _fun0001_ip = 163; continue _fun0001 }
 138:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 6;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var2 = var6.bind(var4)(var7);
 163:
            if(!var3) { _fun0001_ip = 172; continue _fun0001 }
 166:
            if(var2) { _fun0001_ip = 373; continue _fun0001 }
 172:
            if(var3) { _fun0001_ip = 323; continue _fun0001 }
 178:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 9;
            var3 = var8[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.isChannelNSFW;
            var3 = var3.bind(var6)(var7);
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            if(var3) { _fun0001_ip = 285; continue _fun0001 }
 224:
            if(var2) { _fun0001_ip = 247; continue _fun0001 }
 227:
            var2 = 12;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.VoiceNormalIcon;
            _fun0001_ip = 265; continue _fun0001;
 247:
            var2 = 11;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var3 = var2.VoiceLockIcon;
 265:
            var2 = {};
            var12 = var2;
            var11 = var5;
            var9 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var3, var2);
            _fun0001_ip = 321; continue _fun0001;
 285:
            var3 = 10;
            var3 = var8[var3];
            var3 = var6.bind(var4)(var3);
            var6 = var3.VoiceWarningIcon;
            var3 = {};
            var12 = var3;
            var11 = var5;
            var8 = copyDataProperties(var12, var11);
            var2 = var7.bind(var4)(var6, var3);
 321:
            _fun0001_ip = 371; continue _fun0001;
 323:
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
 371:
            _fun0001_ip = 421; continue _fun0001;
 373:
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
 421:
            return var2;
 423:
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