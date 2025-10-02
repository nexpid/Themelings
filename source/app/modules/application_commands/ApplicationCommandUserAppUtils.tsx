// app/modules/application_commands/ApplicationCommandUserAppUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/application_commands/ApplicationCommandUserAppUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getEphemeralReasonMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.GUILD_FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.USER_FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.SLOWMODE;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.RATE_LIMIT;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_MESSAGE_USER;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.USER_VERIFICATION_LEVEL;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_UNARCHIVE_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_JOIN_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.MISSING_PERMISSIONS;
            if(!(var2 !== var3)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_ATTACHMENTS;
            if(!(var2 !== var3)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_EMBEDS;
            if(!(var2 !== var3)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_STICKERS;
            if(!(var2 !== var3)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.AUTOMOD_BLOCKED;
            if(!(var2 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.HARMFUL_LINK;
            if(!(var2 !== var3)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_USE_COMMAND;
            if(!(var2 !== var3)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.BETA_GUILD_SIZE;
            if(!(var2 !== var3)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_USE_EXTERNAL_APPS;
            if(!(var2 !== var3)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.v/OAcn;
            var2 = var3.bind(var4)(var2);
            return var2;
case 36:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Ji4l7O;
            var2 = var3.bind(var4)(var2);
            return var2;
case 34:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Af3rGR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 32:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.kzMhho;
            var2 = var3.bind(var4)(var2);
            return var2;
case 30:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.zeqgmJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 28:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.24PAJy;
            var2 = var3.bind(var4)(var2);
            return var2;
case 26:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.byrr7u;
            var2 = var3.bind(var4)(var2);
            return var2;
case 24:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.vGgPMD;
            var2 = var3.bind(var4)(var2);
            return var2;
case 22:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Htl7W1;
            var2 = var3.bind(var4)(var2);
            return var2;
case 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.LLF2DA;
            var2 = var3.bind(var4)(var2);
            return var2;
case 18:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.BqKxlZ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.AIqS3t;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.SLAkFR;
            var2 = var3.bind(var4)(var2);
            return var2;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.w7sHnJ;
            var2 = var3.bind(var4)(var2);
            return var2;
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.zBB9xM;
            var2 = var3.bind(var4)(var2);
            return var2;
case 8:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.9UAXh4;
            var2 = var3.bind(var4)(var2);
            return var2;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.gs1sxc;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 1;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.0QUDYW;
            var2 = var3.bind(var4)(var2);
            return var2;
case 2:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 1;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.WCvmra;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getEphemeralReasonMessage'] = var2;
    return var1;
})();