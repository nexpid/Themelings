// app/modules/messages/parseReactionPermissions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/parseReactionPermissions.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function parseReactionPermissions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channel;
            var3 = var1.canChat;
            var7 = var1.renderReactions;
            var12 = var1.canAddNewReactions;
            var2 = var1.isLurking;
            var6 = var1.isGuest;
            var5 = var1.communicationDisabled;
            var9 = var1.isActiveChannelOrUnarchivableThread;
            var4 = var1.isAutomodQuarantined;
            var1 = var8.isPrivate;
            var11 = var1.bind(var8)();
            var1 = var8.isSystemDM;
            var10 = var1.bind(var8)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var11;
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var9;
case 4:
            var1 = {};
            var7 = !var7;
            var1['disableReactionReads'] = var7;
            var7 = var2;
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var6;
case 6:
            if(var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = !var3;
case 8:
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = true;
            var8 = var8 === var12;
            if(var8) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var11;
case 12:
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var8 = !var10;
case 14:
            if(!var8) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var9;
case 16:
            var7 = !var8;
case 10:
            var1['disableReactionCreates'] = var7;
            if(var2) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = var6;
case 18:
            if(var2) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = !var3;
case 20:
            if(var2) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var3 = true;
            var2 = var3 === var5;
case 22:
            if(var2) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = true;
            var2 = var3 === var4;
case 24:
            var1['disableReactionUpdates'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();