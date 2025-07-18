// app/modules/messages/parseReactionPermissions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = native7;
    var1 = 0;
    var4 = var2[var1];
    var2 = native2;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/messages/parseReactionPermissions.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function parseReactionPermissions(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var3) { _fun0001_ip = 82; continue _fun0001 }
 79:
            var3 = var11;
 82:
            if(!var3) { _fun0001_ip = 88; continue _fun0001 }
 85:
            var3 = var9;
 88:
            var1 = {};
            var7 = !var7;
            var1['disableReactionReads'] = var7;
            var7 = var2;
            if(var2) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var7 = var6;
 107:
            if(var7) { _fun0001_ip = 113; continue _fun0001 }
 110:
            var7 = !var3;
 113:
            if(var7) { _fun0001_ip = 143; continue _fun0001 }
 116:
            var8 = true;
            var8 = var8 === var12;
            if(var8) { _fun0001_ip = 128; continue _fun0001 }
 125:
            var8 = var11;
 128:
            if(!var8) { _fun0001_ip = 134; continue _fun0001 }
 131:
            var8 = !var10;
 134:
            if(!var8) { _fun0001_ip = 140; continue _fun0001 }
 137:
            var8 = var9;
 140:
            var7 = !var8;
 143:
            var1['disableReactionCreates'] = var7;
            if(var2) { _fun0001_ip = 154; continue _fun0001 }
 151:
            var2 = var6;
 154:
            if(var2) { _fun0001_ip = 160; continue _fun0001 }
 157:
            var2 = !var3;
 160:
            if(var2) { _fun0001_ip = 169; continue _fun0001 }
 163:
            var3 = true;
            var2 = var3 === var5;
 169:
            if(var2) { _fun0001_ip = 178; continue _fun0001 }
 172:
            var3 = true;
            var2 = var3 === var4;
 178:
            var1['disableReactionUpdates'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();