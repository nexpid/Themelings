// app/modules/panels/isChannelFocused.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function getFocusedChannelId() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 4;
            var2 = var5[var2];
            var3 = undefined;
            var6 = var4.bind(var3)(var2);
            var2 = var6.getRootNavigationRef;
            var6 = var2.bind(var6)();
            var2 = 5;
            var2 = var5[var2];
            var4 = var4.bind(var3)(var2);
            var2 = var4.getChatLayout;
            var2 = var2.bind(var4)();
            var4 = var2.isChatLockedOpen;
            var5 = null;
            if(!(var5 != var6)) { _fun0001_ip = 202; continue _fun0001 }
 72:
            var2 = var6.isReady;
            var2 = var2.bind(var6)();
            if(!var2) { _fun0001_ip = 202; continue _fun0001 }
 85:
            var2 = var6.getCurrentRoute;
            var8 = var2.bind(var6)();
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 3;
            var2 = var2[var9];
            var6 = var6.bind(var3)(var2);
            var2 = var6.coerceChannelRoute;
            var2 = var2.bind(var6)(var8);
            if(!(var5 == var2)) { _fun0001_ip = 189; continue _fun0001 }
 130:
            if(!var4) { _fun0001_ip = 165; continue _fun0001 }
 133:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var9];
            var7 = var7.bind(var3)(var6);
            var6 = var7.coerceGuildsRoute;
            var6 = var6.bind(var7)(var8);
            if(!(var5 == var6)) { _fun0001_ip = 167; continue _fun0001 }
 165:
            return var3;
 167:
            var7 = var6.params;
            var8 = var5 == var7;
            var6 = undefined;
            if(var8) { _fun0001_ip = 187; continue _fun0001 }
 182:
            var6 = var7.channelId;
 187:
            return var6;
 189:
            var2 = var2.params;
            var2 = var2.channelId;
            return var2;
 202:
            var2 = _closure1_slot5;
            if(!(var5 === var2)) { _fun0001_ip = 680; continue _fun0001 }
 213:
            var7 = _closure1_slot1;
            var2 = _closure1_slot2;
            var6 = 2;
            var6 = var2[var6];
            var6 = var7.bind(var3)(var6);
            var9 = var6.bind(var3)();
            var6 = _closure1_slot0;
            var7 = 3;
            var2 = var2[var7];
            var8 = var6.bind(var3)(var2);
            var6 = var8.coerceMainRoute;
            var10 = var5 == var9;
            var2 = undefined;
            if(var10) { _fun0001_ip = 313; continue _fun0001 }
 268:
            var10 = var9.routes;
            var11 = var5 == var10;
            var2 = undefined;
            if(var11) { _fun0001_ip = 313; continue _fun0001 }
 283:
            var12 = var5 == var9;
            var11 = undefined;
            if(var12) { _fun0001_ip = 297; continue _fun0001 }
 292:
            var11 = var9.index;
 297:
            var12 = var5 != var11;
            var9 = 0;
            if(!var12) { _fun0001_ip = 309; continue _fun0001 }
 306:
            var9 = var11;
 309:
            var2 = var10[var9];
 313:
            var9 = var6.bind(var8)(var2);
            var6 = var5 != var9;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 676; continue _fun0001 }
 330:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var7];
            var8 = var8.bind(var3)(var6);
            if(var4) { _fun0001_ip = 465; continue _fun0001 }
 350:
            var6 = var8.coerceChannelRoute;
            var10 = var9.state;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 420; continue _fun0001 }
 370:
            var11 = var10.routes;
            var10 = var5 == var11;
            var4 = undefined;
            if(var10) { _fun0001_ip = 420; continue _fun0001 }
 385:
            var10 = var9.state;
            var13 = var5 == var10;
            var12 = undefined;
            if(var13) { _fun0001_ip = 404; continue _fun0001 }
 399:
            var12 = var10.index;
 404:
            var13 = var5 != var12;
            var10 = 0;
            if(!var13) { _fun0001_ip = 416; continue _fun0001 }
 413:
            var10 = var12;
 416:
            var4 = var11[var10];
 420:
            var4 = var6.bind(var8)(var4);
            var6 = var5 == var4;
            var2 = undefined;
            if(var6) { _fun0001_ip = 676; continue _fun0001 }
 437:
            var6 = var4.params;
            var10 = var5 == var6;
            var4 = undefined;
            if(var10) { _fun0001_ip = 457; continue _fun0001 }
 452:
            var4 = var6.channelId;
 457:
            var2 = var4;
            _fun0001_ip = 676; continue _fun0001;
 465:
            var6 = var8.coerceTabsRoute;
            var10 = var9.state;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 535; continue _fun0001 }
 485:
            var10 = var10.routes;
            var11 = var5 == var10;
            var4 = undefined;
            if(var11) { _fun0001_ip = 535; continue _fun0001 }
 500:
            var9 = var9.state;
            var12 = var5 == var9;
            var11 = undefined;
            if(var12) { _fun0001_ip = 519; continue _fun0001 }
 514:
            var11 = var9.index;
 519:
            var12 = var5 != var11;
            var9 = 0;
            if(!var12) { _fun0001_ip = 531; continue _fun0001 }
 528:
            var9 = var11;
 531:
            var4 = var10[var9];
 535:
            var8 = var6.bind(var8)(var4);
            var4 = var5 != var8;
            var2 = undefined;
            if(!var4) { _fun0001_ip = 676; continue _fun0001 }
 552:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var7 = var6.bind(var3)(var4);
            var6 = var7.coerceGuildsRoute;
            var9 = var8.state;
            var10 = var5 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 639; continue _fun0001 }
 589:
            var9 = var9.routes;
            var10 = var5 == var9;
            var4 = undefined;
            if(var10) { _fun0001_ip = 639; continue _fun0001 }
 604:
            var8 = var8.state;
            var11 = var5 == var8;
            var10 = undefined;
            if(var11) { _fun0001_ip = 623; continue _fun0001 }
 618:
            var10 = var8.index;
 623:
            var11 = var5 != var10;
            var8 = 0;
            if(!var11) { _fun0001_ip = 635; continue _fun0001 }
 632:
            var8 = var10;
 635:
            var4 = var9[var8];
 639:
            var4 = var6.bind(var7)(var4);
            var6 = var5 != var4;
            var2 = undefined;
            if(!var6) { _fun0001_ip = 676; continue _fun0001 }
 653:
            var4 = var4.params;
            var5 = var5 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 673; continue _fun0001 }
 668:
            var3 = var4.channelId;
 673:
            var2 = var3;
 676:
            _closure1_slot5 = var2;
 680:
            var1 = _closure1_slot5;
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function isChannelFocused() {
        var2 = _closure1_slot6;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var1 = null;
        var1 = var1 != var2;
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var9 = var8[var6];
    var6 = native4;
    var6 = var6.bind(var1)(var9);
    var _closure1_slot4 = var6;
    var6 = null;
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/panels/isChannelFocused.native.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getFocusedChannelId'] = var5;
    var3['isChannelFocused'] = var4;
    var2 = function useIsChannelFocused() {
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var1 = function() {
            var2 = _closure1_slot7;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        };
        var7 = var4.bind(var5)(var1);
        var6 = _closure1_slot3;
        var4 = undefined;
        var1 = 2;
        var7 = var6.bind(var4)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot0 = var6;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var3 = 5;
        var3 = var7[var3];
        var3 = var6.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var6 = var5.useEffect;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            var3 = _closure2_slot0;
            var2 = _closure1_slot7;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = var6.bind(var5)(var3, var4);
        var4 = var5.useEffect;
        var3 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 4;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getRootNavigationRef;
                var5 = var3.bind(var4)();
                var _closure3_slot0 = var5;
                var3 = null;
                if(!(var3 == var5)) { _fun0002_ip = 49; continue _fun0002 }
 47:
                return var2;
 49:
                var4 = function handleStateChange() {
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot7;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var _closure3_slot1 = var4;
                var3 = var5.addListener;
                var2 = 'state';
                var2 = var3.bind(var5)(var2, var4);
                var1 = function() {
                    var4 = _closure3_slot0;
                    var3 = var4.removeListener;
                    var2 = _closure3_slot1;
                    var1 = 'state';
                    var1 = var3.bind(var4)(var1, var2);
                    var1 = undefined;
                    return var1;
                };
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useIsChannelFocused'] = var2;
    return var1;
})();