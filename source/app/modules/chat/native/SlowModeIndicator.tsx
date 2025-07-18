// app/modules/chat/native/SlowModeIndicator.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot6 = var8;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'alignItems': 'center', 'flexDirection': 'row'};
    var4['container'] = var10;
    var10 = {};
    var11 = 5;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_4;
    var10['marginLeft'] = var11;
    var4['icon'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function SlowModeIndicator(arg1) {
        var2 = arg1;
        var3 = var2.channelId;
        var _closure2_slot0 = var3;
        var11 = var2.hasTypingText;
        var _closure2_slot1 = var11;
        var2 = var2.slowmodeType;
        var _closure2_slot2 = var2;
        var2 = _closure1_slot8;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 6;
        var2 = var10[var2];
        var8 = var7.bind(var4)(var2);
        var6 = var8.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var4 = _closure1_slot5;
            var3 = var4.getSlowmodeCooldownGuess;
            var2 = _closure2_slot0;
            var1 = _closure2_slot2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var8 = var6.bind(var8)(var3, var2);
        var _closure2_slot3 = var8;
        var6 = _closure1_slot3;
        var3 = var6.useMemo;
        var2 = new Array(2);
        var2[0] = var11;
        var2[1] = var8;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 7;
                var1 = var8[var1];
                var11 = undefined;
                var4 = var10.bind(var11)(var1);
                var2 = var4.duration;
                var9 = _closure2_slot3;
                var4 = var2.bind(var4)(var9);
                var2 = var4.minutes;
                var6 = var2.bind(var4)();
                var2 = global;
                var5 = var2.HermesInternal;
                var5 = var5.concat;
                var7 = '';
                var6 = var5.bind(var7)(var6);
                var5 = var6.padStart;
                var14 = 2;
                var13 = '0';
                var6 = var5.bind(var6)(var14, var13);
                var5 = var4.seconds;
                var12 = var5.bind(var4)();
                var5 = var2.HermesInternal;
                var5 = var5.concat;
                var12 = var5.bind(var7)(var12);
                var5 = var12.padStart;
                var5 = var5.bind(var12)(var14, var13);
                var12 = 8;
                var8 = var8[var12];
                var8 = var10.bind(var11)(var8);
                var8 = var8.Millis;
                var8 = var8.HOUR;
                if(!(!(var9 >= var8))) { _fun0001_ip = 337; continue _fun0001 }
 164:
                var9 = _closure2_slot3;
                var10 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var12];
                var8 = var10.bind(var11)(var8);
                var8 = var8.Millis;
                var8 = var8.MINUTE;
                if(!(!(var9 >= var8))) { _fun0001_ip = 303; continue _fun0001 }
 201:
                var9 = _closure2_slot3;
                var8 = 0;
                if(!(!(var9 > var8))) { _fun0001_ip = 279; continue _fun0001 }
 211:
                var8 = _closure2_slot1;
                var1 = null;
                if(var8) { _fun0001_ip = 277; continue _fun0001 }
 220:
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var3 = 9;
                var8 = var12[var3];
                var8 = var10.bind(var11)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var3 = var12[var3];
                var3 = var10.bind(var11)(var3);
                var3 = var3.t;
                var3 = var3.Icu3bW;
                var1 = var8.bind(var9)(var3);
 277:
                _fun0001_ip = 301; continue _fun0001;
 279:
                var3 = var2.HermesInternal;
                var8 = var3.concat;
                var3 = '0:';
                var1 = var8.bind(var3)(var5);
 301:
                _fun0001_ip = 335; continue _fun0001;
 303:
                var3 = var4.minutes;
                var9 = var3.bind(var4)();
                var3 = var2.HermesInternal;
                var8 = var3.concat;
                var3 = ':';
                var1 = var8.bind(var7)(var9, var3, var5);
 335:
                _fun0001_ip = 381; continue _fun0001;
 337:
                var3 = var4.hours;
                var19 = var3.bind(var4)();
                var2 = var2.HermesInternal;
                var3 = var2.concat;
                var2 = ':';
                var20 = var7;
                var18 = var2;
                var17 = var6;
                var16 = var2;
                var15 = var5;
                var1 = var20[var3](var19, var18, var17, var16, var15, var14);
 381:
                return var1;
            }
        };
        var11 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var9.container;
        var1['style'] = var6;
        var8 = _closure1_slot6;
        var5 = 10;
        var5 = var10[var5];
        var5 = var7.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'lineClamp': 1, 'allowFontScaling': false, 'variant': 'text-xs/medium', 'color': 'interactive-normal'};
        var5['children'] = var11;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = 11;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.TimerIcon;
        var6 = {};
        var9 = var9.icon;
        var6['style'] = var9;
        var9 = 'xxs';
        var6['size'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat/native/SlowModeIndicator.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();