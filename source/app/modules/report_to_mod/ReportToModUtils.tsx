// app/modules/report_to_mod/ReportToModUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var10;
    var7 = function isModeratorReportOrPostChannelId(arg1) {
        var3 = _closure1_slot12;
        var4 = _closure1_slot5;
        var2 = var4.getChannel;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot9 = var7;
    var6 = function isModeratorReportChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0001_ip = 38; continue _fun0001 }
 12:
            var2 = var4.isModeratorReportChannel;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 35; continue _fun0001 }
 25:
            var3 = var4.isForumChannel;
            var2 = var3.bind(var4)();
 35:
            var1 = var2;
 38:
            return var1;
        }
    };
    var _closure1_slot10 = var6;
    var5 = function isModeratorReportPostChannel(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 38; continue _fun0002 }
 12:
            var2 = var4.isModeratorReportChannel;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0002_ip = 35; continue _fun0002 }
 25:
            var3 = var4.isForumPost;
            var2 = var3.bind(var4)();
 35:
            var1 = var2;
 38:
            return var1;
        }
    };
    var _closure1_slot11 = var5;
    var4 = function isModeratorReportOrPostChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0003_ip = 41; continue _fun0003 }
 12:
            var2 = _closure1_slot10;
            var4 = undefined;
            var2 = var2.bind(var4)(var5);
            if(var2) { _fun0003_ip = 38; continue _fun0003 }
 29:
            var3 = _closure1_slot11;
            var2 = var3.bind(var4)(var5);
 38:
            var1 = var2;
 41:
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.ReportToModPermissions;
    var _closure1_slot8 = var8;
    var8 = 15;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/report_to_mod/ReportToModUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function canReportMessageToMods(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 5;
            var3 = var5[var3];
            var5 = undefined;
            var6 = var4.bind(var5)(var3);
            var4 = var6.canReportUser;
            var3 = var2.author;
            var3 = var4.bind(var6)(var3);
            if(var3) { _fun0004_ip = 52; continue _fun0004 }
 48:
            var3 = false;
            return var3;
 52:
            var4 = _closure1_slot5;
            var3 = var4.getChannel;
            var2 = var2.channel_id;
            var2 = var3.bind(var4)(var2);
            var3 = null;
            if(!(var3 != var2)) { _fun0004_ip = 155; continue _fun0004 }
 77:
            var6 = _closure1_slot6;
            var4 = var6.getGuild;
            var2 = var2.guild_id;
            var4 = var4.bind(var6)(var2);
            if(!(var3 != var4)) { _fun0004_ip = 151; continue _fun0004 }
 100:
            var6 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 6;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.bind(var5)(var4);
            var2 = 7;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.bind(var5)(var4);
            if(!var1) { _fun0004_ip = 149; continue _fun0004 }
 145:
            var1 = var3 != var2;
 149:
            return var1;
 151:
            var1 = false;
            return var1;
 155:
            var1 = false;
            return var1;
        }
    };
    var3['canReportMessageToMods'] = var8;
    var8 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arguments[1];
            var7 = undefined;
            if(!(var5 === var7)) { _fun0005_ip = 35; continue _fun0005 }
 9:
            var3 = _closure1_slot6;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = _closure1_slot7;
            var1[1] = var2;
            var5 = var1;
 35:
            var3 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 8;
            var1 = var4[var1];
            var4 = var3.bind(var7)(var1);
            var3 = var4.getContextForPermission;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var5);
            var4 = null;
            if(!(var4 != var1)) { _fun0005_ip = 243; continue _fun0005 }
 82:
            var9 = var1.user;
            var8 = var1.guild;
            var3 = var4 == var8;
            if(var3) { _fun0005_ip = 127; continue _fun0005 }
 99:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 6;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.bind(var7)(var8);
            var3 = !var1;
 127:
            if(var3) { _fun0005_ip = 159; continue _fun0005 }
 130:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var7)(var1);
            var1 = var1.bind(var7)(var8);
            var3 = var4 == var1;
 159:
            var1 = !var3;
            if(var3) { _fun0005_ip = 241; continue _fun0005 }
 165:
            var6 = _closure1_slot2;
            var10 = _closure1_slot3;
            var3 = 9;
            var3 = var10[var3];
            var5 = var6.bind(var7)(var3);
            var4 = var5.hasAny;
            var3 = 10;
            var3 = var10[var3];
            var7 = var6.bind(var7)(var3);
            var6 = var7.computePermissions;
            var3 = {};
            var3['user'] = var9;
            var3['context'] = var8;
            var8 = false;
            var3['checkElevated'] = var8;
            var3 = var6.bind(var7)(var3);
            var2 = _closure1_slot8;
            var1 = var4.bind(var5)(var3, var2);
 241:
            return var1;
 243:
            var1 = false;
            return var1;
        }
    };
    var3['canAccessReportsChannel'] = var8;
    var8 = function getReportToModChannelId(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot6;
            var3 = var4.getGuild;
            var1 = arg1;
            var4 = var3.bind(var4)(var1);
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0006_ip = 56; continue _fun0006 }
 29:
            var5 = _closure1_slot1;
            var3 = _closure1_slot3;
            var2 = 7;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var1 = var2.bind(var3)(var4);
 56:
            return var1;
        }
    };
    var3['getReportToModChannelId'] = var8;
    var3['isModeratorReportOrPostChannelId'] = var7;
    var7 = function isModeratorReportChannelId(arg1) {
        var3 = _closure1_slot10;
        var4 = _closure1_slot5;
        var2 = var4.getChannel;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['isModeratorReportChannelId'] = var7;
    var3['isModeratorReportChannel'] = var6;
    var6 = function isModeratorReportPostChannelId(arg1) {
        var3 = _closure1_slot11;
        var4 = _closure1_slot5;
        var2 = var4.getChannel;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['isModeratorReportPostChannelId'] = var6;
    var3['isModeratorReportPostChannel'] = var5;
    var3['isModeratorReportOrPostChannel'] = var4;
    var4 = function isSafeToTransitionToReportForCurrentUser(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var3 = null;
            if(!(var3 != var5)) { _fun0007_ip = 171; continue _fun0007 }
 12:
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 11;
            var1 = var6[var1];
            var7 = undefined;
            var4 = var4.bind(var7)(var1);
            var1 = var4.isCurrentUserTeen;
            var1 = var1.bind(var4)();
            if(var1) { _fun0007_ip = 54; continue _fun0007 }
 50:
            var1 = true;
            return var1;
 54:
            var1 = _closure1_slot9;
            var1 = var1.bind(var7)(var5);
            if(var1) { _fun0007_ip = 70; continue _fun0007 }
 66:
            var1 = true;
            return var1;
 70:
            var4 = _closure1_slot4;
            var1 = var4.getMessage;
            var4 = var1.bind(var4)(var5);
            var1 = var4.loaded;
            var5 = var4.firstMessage;
            var1 = !var1;
            if(var1) { _fun0007_ip = 107; continue _fun0007 }
 103:
            var1 = var3 == var5;
 107:
            if(var1) { _fun0007_ip = 169; continue _fun0007 }
 110:
            var6 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 12;
            var2 = var8[var2];
            var4 = var6.bind(var7)(var2);
            var3 = var4.messageHasObscurableMediaForBitmask;
            var2 = 13;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.ContentHarmTypeBitMask;
            var2 = var2.EXPLICIT;
            var2 = var3.bind(var4)(var5, var2);
            var1 = !var2;
 169:
            return var1;
 171:
            var1 = true;
            return var1;
        }
    };
    var3['isSafeToTransitionToReportForCurrentUser'] = var4;
    var4 = function isModeratorReportThreadStarterMessage(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var4 = arg2;
            var1 = var3.isFirstMessageInForumPost;
            var1 = var1.bind(var3)(var4);
            var2 = !var1;
            if(var2) { _fun0008_ip = 36; continue _fun0008 }
 23:
            var1 = var3.isSystemDM;
            var1 = var1.bind(var3)();
            var2 = !var1;
 36:
            var1 = !var2;
            if(var2) { _fun0008_ip = 56; continue _fun0008 }
 42:
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
 56:
            return var1;
        }
    };
    var3['isModeratorReportThreadStarterMessage'] = var4;
    var4 = function sortedModeratorReportTags(arg1) {
        var3 = arg1;
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg1;
                var3 = var1.id;
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var6 = 14;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.ReservedTagIds;
                var1 = var1.MULTIPLE_REPORTS;
                var3 = var3 == var1;
                var1 = -1;
                if(var3) { _fun0009_ip = 110; continue _fun0009 }
 58:
                var3 = arg2;
                var3 = var3.id;
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.ReservedTagIds;
                var2 = var2.MULTIPLE_REPORTS;
                var3 = var3 == var2;
                var2 = 0;
                if(!var3) { _fun0009_ip = 107; continue _fun0009 }
 104:
                var2 = 1;
 107:
                var1 = var2;
 110:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortedModeratorReportTags'] = var4;
    var2 = function isModeratorReportMessage(arg1) {
        var1 = arg1;
        var3 = var1.messageSnapshots;
        var2 = var3.some;
        var1 = function(arg1) {
            var1 = arg1;
            var2 = var1.moderatorReport;
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isModeratorReportMessage'] = var2;
    return var1;
})();