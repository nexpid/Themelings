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
case 0:
                var11 = arguments[0];
                var14 = arguments[1];
                var13 = arguments[2];
                var10 = arguments[3];
                var8 = arguments[4];
                var16 = arguments[5];
                var1 = this;
                var6 = undefined;
                if(!(var11 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var11 = _closure1_slot6;
case 2:
                if(!(var14 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var14 = _closure1_slot10;
case 4:
                if(!(var13 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var13 = _closure1_slot9;
case 6:
                if(!(var10 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var10 = _closure1_slot8;
case 8:
                if(!(var8 === var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var8 = _closure1_slot7;
case 10:
                if(!(var16 === var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var16 = _closure1_slot5;
case 12:
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
                if(!(var1 != var4)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                var12 = var4.guild_id;
                var15 = var7.messageReference;
                var17 = var1 == var15;
                var9 = undefined;
                if(var17) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                var9 = var15.guild_id;
case 16:
                if(!(var12 !== var9)) { _fun0001_ip = 18; continue _fun0001 }
case 14:
                var9 = var7.messageReference;
                var15 = var1 == var9;
                var12 = undefined;
                if(var15) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                var12 = var9.guild_id;
case 19:
                if(!(var1 != var12)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                var9 = var8.getGuild;
                var15 = var9.bind(var8)(var12);
                if(!(var1 == var15)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                var9 = var16.getGuild;
                var15 = var9.bind(var16)(var12);
case 23:
                if(!(var1 != var15)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                var9 = {};
                var9['snapshotIndex'] = var3;
                var12 = _closure1_slot12;
                var12 = var12.bind(var6)(var15, var5);
                var9['footerInfo'] = var12;
                _fun0001_ip = 27; continue _fun0001;
case 25:
                var12 = {};
                var12['snapshotIndex'] = var3;
                var9 = var12;
case 27:
                return var9;
case 21:
                var9 = {};
                var9['snapshotIndex'] = var3;
                return var9;
case 18:
                var9 = var11.getChannel;
                var12 = var7.messageReference;
                var15 = var1 == var12;
                var7 = undefined;
                if(var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                var7 = var12.channel_id;
case 28:
                var12 = var9.bind(var11)(var7);
                if(!(var1 != var12)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                var9 = var10.can;
                var7 = var12.accessPermissions;
                var7 = var9.bind(var10)(var7, var12);
                if(var7) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                var7 = {};
                var7['snapshotIndex'] = var3;
                return var7;
case 32:
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
case 30:
                var7 = var8.getGuild;
                var4 = var4.guild_id;
                var4 = var7.bind(var8)(var4);
                if(!(var1 != var4)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                var1 = {};
                var1['snapshotIndex'] = var3;
                var2 = _closure1_slot12;
                var2 = var2.bind(var6)(var4, var5);
                var1['footerInfo'] = var2;
                _fun0001_ip = 36; continue _fun0001;
case 34:
                var2 = {};
                var2['snapshotIndex'] = var3;
                var1 = var2;
case 36:
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
case 0:
            var5 = arg1;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var3 = var3.bind(var2)(var5);
            if(!var3) { _fun0002_ip = 37; continue _fun0002 }
case 38:
            var3 = var5.messageSnapshots;
            var4 = 0;
            var3 = var3[var4];
            var6 = null;
            if(!(var6 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 37:
            return var2;
case 6:
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