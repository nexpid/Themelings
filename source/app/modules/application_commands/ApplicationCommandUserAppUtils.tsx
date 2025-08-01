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
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 0;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 1717; continue _fun0001 }
 46:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.GUILD_FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 1658; continue _fun0001 }
 82:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.USER_FEATURE_LIMITED;
            if(!(var2 !== var3)) { _fun0001_ip = 1599; continue _fun0001 }
 118:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.SLOWMODE;
            if(!(var2 !== var3)) { _fun0001_ip = 1540; continue _fun0001 }
 154:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.RATE_LIMIT;
            if(!(var2 !== var3)) { _fun0001_ip = 1481; continue _fun0001 }
 190:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_MESSAGE_USER;
            if(!(var2 !== var3)) { _fun0001_ip = 1422; continue _fun0001 }
 226:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.USER_VERIFICATION_LEVEL;
            if(!(var2 !== var3)) { _fun0001_ip = 1363; continue _fun0001 }
 262:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_UNARCHIVE_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 1304; continue _fun0001 }
 298:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_JOIN_THREAD;
            if(!(var2 !== var3)) { _fun0001_ip = 1245; continue _fun0001 }
 334:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.MISSING_PERMISSIONS;
            if(!(var2 !== var3)) { _fun0001_ip = 1186; continue _fun0001 }
 370:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_ATTACHMENTS;
            if(!(var2 !== var3)) { _fun0001_ip = 1127; continue _fun0001 }
 406:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_EMBEDS;
            if(!(var2 !== var3)) { _fun0001_ip = 1068; continue _fun0001 }
 442:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_SEND_STICKERS;
            if(!(var2 !== var3)) { _fun0001_ip = 1009; continue _fun0001 }
 478:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.AUTOMOD_BLOCKED;
            if(!(var2 !== var3)) { _fun0001_ip = 950; continue _fun0001 }
 514:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.HARMFUL_LINK;
            if(!(var2 !== var3)) { _fun0001_ip = 891; continue _fun0001 }
 550:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_USE_COMMAND;
            if(!(var2 !== var3)) { _fun0001_ip = 832; continue _fun0001 }
 586:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.BETA_GUILD_SIZE;
            if(!(var2 !== var3)) { _fun0001_ip = 773; continue _fun0001 }
 622:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.EphemeralMessageReason;
            var2 = var2.CANNOT_USE_EXTERNAL_APPS;
            if(!(var2 !== var3)) { _fun0001_ip = 714; continue _fun0001 }
 655:
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
 714:
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
 773:
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
 832:
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
 891:
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
 950:
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
 1009:
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
 1068:
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
 1127:
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
 1186:
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
 1245:
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
 1304:
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
 1363:
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
 1422:
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
 1481:
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
 1540:
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
 1599:
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
 1658:
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
 1717:
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