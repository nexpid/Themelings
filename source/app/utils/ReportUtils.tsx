// app/utils/ReportUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var6 = function canReportUser(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var3.id;
            var5 = _closure1_slot3;
            var2 = var5.getCurrentUser;
            var2 = var2.bind(var5)();
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var2.id;
            var2 = var2 !== var4;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var3.system;
            var3 = true;
            var2 = var3 !== var4;
case 6:
            var1 = var2;
case 4:
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function canReportMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot6;
            var3 = var2.author;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 8:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function canReportAndDeleteInChannel(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var3 = _closure1_slot0;
            var1 = var3.getChannel;
            var5 = var1.bind(var3)(var8);
            var1 = null;
            if(!(var1 != var5)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var4 = var5.type;
            var3 = _closure1_slot4;
            var3 = var3.DM;
            if(!(var4 !== var3)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var4 = var5.type;
            var3 = _closure1_slot4;
            var3 = var3.GROUP_DM;
            if(!(var4 !== var3)) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            var7 = _closure1_slot2;
            var6 = var7.canWithPartialContext;
            var3 = _closure1_slot5;
            var4 = var3.MANAGE_MESSAGES;
            var3 = {};
            var3['channelId'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = false;
            return var3;
case 15:
            var4 = _closure1_slot1;
            var3 = var4.getMemberCount;
            var2 = var5.getGuildId;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var1 = var1 != var3;
            if(!var1) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var2 = 50;
            var1 = var3 >= var2;
case 17:
            return var1;
case 12:
            var1 = true;
            return var1;
case 10:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.ChannelTypes;
    var _closure1_slot4 = var10;
    var7 = var7.Permissions;
    var _closure1_slot5 = var7;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/ReportUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['canReportUser'] = var6;
    var3['canReportMessage'] = var5;
    var3['canReportAndDeleteInChannel'] = var4;
    var2 = function canDeleteAndReportMessage(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0004_ip = 19; continue _fun0004 }
case 9:
            var4 = _closure1_slot7;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 19:
            if(!var1) { _fun0004_ip = 20; continue _fun0004 }
case 11:
            var4 = _closure1_slot8;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 20:
            return var1;
        }
    };
    var3['canDeleteAndReportMessage'] = var2;
    return var1;
})();