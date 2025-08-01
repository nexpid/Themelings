// app/modules/forwarding/formatMessageForwards.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function createGuildBreadcrumb(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var1 = {};
        var2 = var7.name;
        var1['originLabel'] = var2;
        var4 = _closure1_slot1;
        var9 = _closure1_slot2;
        var3 = 8;
        var3 = var9[var3];
        var8 = undefined;
        var5 = var4.bind(var8)(var3);
        var4 = var5.getGuildIconURL;
        var3 = {};
        var10 = var7.id;
        var3['id'] = var10;
        var10 = 16;
        var3['size'] = var10;
        var10 = var7.icon;
        var3['icon'] = var10;
        var10 = false;
        var3['canAnimate'] = var10;
        var3 = var4.bind(var5)(var3);
        var1['originIconUrl'] = var3;
        var1['timestampLabel'] = var6;
        var3 = _closure1_slot0;
        var2 = 9;
        var4 = var9[var2];
        var4 = var3.bind(var8)(var4);
        var5 = var4.intl;
        var4 = var5.formatToPlainString;
        var2 = var9[var2];
        var2 = var3.bind(var8)(var2);
        var2 = var2.t;
        var3 = var2.+l04BA;
        var2 = {};
        var7 = var7.name;
        var2['origin'] = var7;
        var2['timestamp'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        var1['accessibilityLabel'] = var2;
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = function() {
        var4 = _closure1_slot4;
        var3 = function MessageForward(arg1, arg2, arg3) {
            var3 = this;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['parentMessage'] = var2;
            var2 = arg2;
            var3['messageSnapshot'] = var2;
            var2 = arg3;
            var3['snapshotIndex'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var5 = 'getForwardInfo';
        var1['key'] = var5;
        var2 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var11 = arguments[0];
                var14 = arguments[1];
                var13 = arguments[2];
                var10 = arguments[3];
                var8 = arguments[4];
                var16 = arguments[5];
                var1 = this;
                var6 = undefined;
                if(!(var11 === var6)) { _fun0001_ip = 34; continue _fun0001 }
 27:
                var11 = _closure1_slot6;
 34:
                if(!(var14 === var6)) { _fun0001_ip = 45; continue _fun0001 }
 38:
                var14 = _closure1_slot10;
 45:
                if(!(var13 === var6)) { _fun0001_ip = 56; continue _fun0001 }
 49:
                var13 = _closure1_slot9;
 56:
                if(!(var10 === var6)) { _fun0001_ip = 67; continue _fun0001 }
 60:
                var10 = _closure1_slot8;
 67:
                if(!(var8 === var6)) { _fun0001_ip = 78; continue _fun0001 }
 71:
                var8 = _closure1_slot7;
 78:
                if(!(var16 === var6)) { _fun0001_ip = 89; continue _fun0001 }
 82:
                var16 = _closure1_slot5;
 89:
                var3 = var1.snapshotIndex;
                var7 = var1.parentMessage;
                var4 = var1.messageSnapshot;
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = 10;
                var5 = var12[var5];
                var9 = var9.bind(var6)(var5);
                var5 = var9.calendarFormatCompact;
                var4 = var4.message;
                var4 = var4.timestamp;
                var5 = var5.bind(var9)(var4);
                var4 = var11.getChannel;
                var1 = var1.parentMessage;
                var1 = var1.channel_id;
                var4 = var4.bind(var11)(var1);
                var1 = null;
                if(!(var1 != var4)) { _fun0001_ip = 208; continue _fun0001 }
 179:
                var12 = var4.guild_id;
                var15 = var7.messageReference;
                var17 = var1 == var15;
                var9 = undefined;
                if(var17) { _fun0001_ip = 204; continue _fun0001 }
 199:
                var9 = var15.guild_id;
 204:
                if(!(var12 !== var9)) { _fun0001_ip = 305; continue _fun0001 }
 208:
                var9 = var7.messageReference;
                var15 = var1 == var9;
                var12 = undefined;
                if(var15) { _fun0001_ip = 228; continue _fun0001 }
 223:
                var12 = var9.guild_id;
 228:
                if(!(var1 != var12)) { _fun0001_ip = 296; continue _fun0001 }
 232:
                var9 = var8.getGuild;
                var15 = var9.bind(var8)(var12);
                if(!(var1 == var15)) { _fun0001_ip = 256; continue _fun0001 }
 246:
                var9 = var16.getGuild;
                var15 = var9.bind(var16)(var12);
 256:
                if(!(var1 != var15)) { _fun0001_ip = 284; continue _fun0001 }
 260:
                var9 = {};
                var9['snapshotIndex'] = var3;
                var12 = _closure1_slot12;
                var12 = var12.bind(var6)(var15, var5);
                var9['footerInfo'] = var12;
                _fun0001_ip = 294; continue _fun0001;
 284:
                var12 = {};
                var12['snapshotIndex'] = var3;
                var9 = var12;
 294:
                return var9;
 296:
                var9 = {};
                var9['snapshotIndex'] = var3;
                return var9;
 305:
                var9 = var11.getChannel;
                var12 = var7.messageReference;
                var15 = var1 == var12;
                var7 = undefined;
                if(var15) { _fun0001_ip = 330; continue _fun0001 }
 325:
                var7 = var12.channel_id;
 330:
                var12 = var9.bind(var11)(var7);
                if(!(var1 != var12)) { _fun0001_ip = 506; continue _fun0001 }
 342:
                var9 = var10.can;
                var7 = var12.accessPermissions;
                var7 = var9.bind(var10)(var7, var12);
                if(var7) { _fun0001_ip = 372; continue _fun0001 }
 363:
                var7 = {};
                var7['snapshotIndex'] = var3;
                return var7;
 372:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var7 = 11;
                var7 = var15[var7];
                var10 = var11.bind(var6)(var7);
                var9 = var10.computeChannelName;
                var18 = true;
                var22 = var10;
                var21 = var12;
                var20 = var14;
                var19 = var13;
                var14 = var22[var9](var21, var20, var19, var18, var17);
                var7 = {};
                var7['snapshotIndex'] = var3;
                var9 = {};
                var9['originLabel'] = var14;
                var9['timestampLabel'] = var5;
                var10 = 9;
                var12 = var15[var10];
                var12 = var11.bind(var6)(var12);
                var13 = var12.intl;
                var12 = var13.formatToPlainString;
                var10 = var15[var10];
                var10 = var11.bind(var6)(var10);
                var10 = var10.t;
                var11 = var10.+l04BA;
                var10 = {};
                var10['origin'] = var14;
                var10['timestamp'] = var5;
                var10 = var12.bind(var13)(var11, var10);
                var9['accessibilityLabel'] = var10;
                var7['footerInfo'] = var9;
                return var7;
 506:
                var7 = var8.getGuild;
                var4 = var4.guild_id;
                var4 = var7.bind(var8)(var4);
                if(!(var1 != var4)) { _fun0001_ip = 549; continue _fun0001 }
 525:
                var1 = {};
                var1['snapshotIndex'] = var3;
                var2 = _closure1_slot12;
                var2 = var2.bind(var6)(var4, var5);
                var1['footerInfo'] = var2;
                _fun0001_ip = 559; continue _fun0001;
 549:
                var2 = {};
                var2['snapshotIndex'] = var3;
                var1 = var2;
 559:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot11 = var4;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forwarding/formatMessageForwards.tsx';
    var5 = var6.bind(var7)(var5);
    var3['MessageForward'] = var4;
    var2 = function maybeCreateSingleForwardForMessage(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var3 = var3.bind(var2)(var5);
            if(!var3) { _fun0002_ip = 54; continue _fun0002 }
 36:
            var3 = var5.messageSnapshots;
            var4 = 0;
            var3 = var3[var4];
            var6 = null;
            if(!(var6 == var3)) { _fun0002_ip = 56; continue _fun0002 }
 54:
            return var2;
 56:
            var1 = _closure1_slot11;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var10 = var2;
            var9 = var5;
            var8 = var3;
            var7 = 0;
            var1 = new var10[var1](var9, var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var3['maybeCreateSingleForwardForMessage'] = var2;
    return var1;
})();