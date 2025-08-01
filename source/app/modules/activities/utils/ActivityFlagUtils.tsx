// app/modules/activities/utils/ActivityFlagUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var4 = function computeActivityPartyPrivacyFlags(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var3) { _fun0001_ip = 91; continue _fun0001 }
 82:
            var3 = ~var4;
            var3 = var5 & var3;
            _fun0001_ip = 95; continue _fun0001;
 91:
            var3 = var5 | var4;
 95:
            var2 = _closure1_slot3;
            var2 = var2.PARTY_PRIVACY_VOICE_CHANNEL;
            if(var1) { _fun0001_ip = 117; continue _fun0001 }
 108:
            var1 = ~var2;
            var1 = var3 & var1;
            _fun0001_ip = 121; continue _fun0001;
 117:
            var1 = var3 | var2;
 121:
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var8 = var5.ActivityFlags;
    var _closure1_slot3 = var8;
    var5 = var5.ActivityPartyPrivacy;
    var _closure1_slot4 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/utils/ActivityFlagUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['computeActivityPartyPrivacyFlags'] = var4;
    var4 = function computeActivityFlags(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = arguments[1];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var3 = false;
 14:
            var2 = var1.instance;
            var5 = var1.secrets;
            var1 = var1.party;
            var7 = 0;
            if(!var2) { _fun0002_ip = 53; continue _fun0002 }
 37:
            var2 = _closure1_slot3;
            var2 = var2.INSTANCE;
            var7 = var2 | 0;
 53:
            var2 = null;
            var8 = var2 == var5;
            var6 = undefined;
            if(var8) { _fun0002_ip = 69; continue _fun0002 }
 64:
            var6 = var5.join;
 69:
            var5 = var7;
            if(!(var2 != var6)) { _fun0002_ip = 93; continue _fun0002 }
 76:
            var6 = _closure1_slot3;
            var6 = var6.JOIN;
            var5 = var7 | var6;
 93:
            if(var3) { _fun0002_ip = 194; continue _fun0002 }
 96:
            var2 = var2 == var1;
            var3 = undefined;
            if(var2) { _fun0002_ip = 111; continue _fun0002 }
 105:
            var3 = var1.privacy;
 111:
            var1 = _closure1_slot4;
            var1 = var1.PUBLIC;
            var3 = var3 === var1;
            if(var3) { _fun0002_ip = 173; continue _fun0002 }
 131:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var7 = var1.Storage;
            var6 = var7.get;
            var1 = 'ACTIVITIES_FORCE_PUBLIC';
            var3 = var6.bind(var7)(var1);
 173:
            var1 = var5;
            if(!var3) { _fun0002_ip = 192; continue _fun0002 }
 179:
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)(var5);
            var1 = var5 | var2;
 192:
            _fun0002_ip = 224; continue _fun0002;
 194:
            var3 = _closure1_slot3;
            var3 = var3.EMBEDDED;
            var3 = var5 | var3;
            var2 = _closure1_slot5;
            var2 = var2.bind(var4)(var3);
            var1 = var3 | var2;
 224:
            return var1;
        }
    };
    var3['computeActivityFlags'] = var4;
    var4 = function isContextlessEmbeddedActivity(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var8) { _fun0003_ip = 50; continue _fun0003 }
 45:
            var1 = var4.flags;
 50:
            var8 = var5 != var1;
            var5 = 0;
            if(!var8) { _fun0003_ip = 62; continue _fun0003 }
 59:
            var5 = var1;
 62:
            var1 = _closure1_slot3;
            var1 = var1.CONTEXTLESS;
            var1 = var6.bind(var7)(var5, var1);
            if(!var1) { _fun0003_ip = 106; continue _fun0003 }
 81:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
 106:
            return var1;
        }
    };
    var3['isContextlessEmbeddedActivity'] = var4;
    var2 = function applyContextlessFlags(arg1) {
        var1 = _closure1_slot3;
        var2 = var1.CONTEXTLESS;
        var1 = arg1;
        var1 = var1 | var2;
        return var1;
    };
    var3['applyContextlessFlags'] = var2;
    return var1;
})();