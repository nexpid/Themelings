// app/modules/activities/utils/ActivityFlagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _computeActivityPartyPrivacyFlags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var3 = var7[var1];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var8 = var3.AllowActivityPartyPrivacyFriends;
            var3 = var8.getSetting;
            var3 = var3.bind(var8)();
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var4 = var1.AllowActivityPartyPrivacyVoiceChannel;
            var1 = var4.getSetting;
            var1 = var1.bind(var4)();
            var4 = _closure1_slot3;
            var4 = var4.PARTY_PRIVACY_FRIENDS;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = ~var4;
            var3 = var5 & var3;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var5 | var4;
case 4:
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_VOICE_CHANNEL;
            if(var1) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = ~var2;
            var1 = var3 & var1;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var1 = var3 | var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityFlags;
    var _closure1_slot3 = var7;
    var4 = var4.ActivityPartyPrivacy;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/utils/ActivityFlagUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function computeActivityFlags(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arguments[1];
            var1 = arguments[2];
            var2 = arguments[3];
            var3 = arguments[4];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var5 = false;
case 8:
            if(!(var1 === var4)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = false;
case 10:
            if(!(var2 === var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = false;
case 12:
            if(!(var3 === var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = _closure1_slot4;
            var3 = var6.PRIVATE;
case 14:
            var6 = arg1;
            var6 = var6.secrets;
            var7 = 0;
            if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var5 = _closure1_slot3;
            var5 = var5.INSTANCE;
            var7 = var5 | 0;
case 16:
            var8 = null;
            var9 = var8 == var6;
            var5 = undefined;
            if(var9) { _fun0002_ip = 4; continue _fun0002 }
case 18:
            var5 = var6.join;
case 4:
            var6 = var7;
            if(!(var8 != var5)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var5 = _closure1_slot3;
            var5 = var5.JOIN;
            var6 = var7 | var5;
case 19:
            var5 = var6;
            if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = _closure1_slot3;
            var2 = var2.CONTEXTLESS;
            var5 = var6 | var2;
case 21:
            if(var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var1 = _closure1_slot4;
            var1 = var1.PUBLIC;
            var3 = var3 === var1;
            if(var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var7 = var1.Storage;
            var6 = var7.get;
            var1 = 'ACTIVITIES_FORCE_PUBLIC';
            var3 = var6.bind(var7)(var1);
case 25:
            var1 = var5;
            if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var3 = _closure1_slot5;
            var3 = var3.bind(var4)(var5);
            var1 = var5 | var3;
case 27:
            _fun0002_ip = 29; continue _fun0002;
case 23:
            var3 = _closure1_slot3;
            var3 = var3.EMBEDDED;
            var3 = var5 | var3;
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)(var3);
            var1 = var3 | var2;
case 29:
            return var1;
        }
    };
    var3['computeActivityFlags'] = var4;
    var2 = function isContextlessEmbeddedActivity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var7 = var5.bind(var3)(var1);
            var6 = var7.hasFlag;
            var5 = null;
            var8 = var5 == var4;
            var1 = undefined;
            if(var8) { _fun0003_ip = 30; continue _fun0003 }
case 31:
            var1 = var4.flags;
case 30:
            var8 = var5 != var1;
            var5 = 0;
            if(!var8) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            var5 = var1;
case 32:
            var1 = _closure1_slot3;
            var1 = var1.CONTEXTLESS;
            var1 = var6.bind(var7)(var5, var1);
            if(!var1) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
case 34:
            return var1;
        }
    };
    var3['isContextlessEmbeddedActivity'] = var2;
    return var1;
})();