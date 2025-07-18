// app/modules/icymi/native/content_inventory/Badges.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var11 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var7;
    var1 = function ContentTimestamp(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.entry;
            var1 = _closure1_slot10;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var10 = 9;
            var1 = var7[var10];
            var3 = var4.bind(var5)(var1);
            var1 = var3.isEntryActive;
            var1 = var1.bind(var3)(var6);
            var3 = 11;
            var3 = var7[var3];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                var1 = _closure1_slot6;
                var1 = var1.locale;
                return var1;
            };
            var9 = var7.bind(var8)(var4, var3);
            var4 = _closure1_slot7;
            if(var1) { _fun0001_ip = 179; continue _fun0001 }
 102:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 10;
            var1 = var7[var1];
            var1 = var8.bind(var5)(var1);
            var3 = var1.Text;
            var1 = {};
            var12 = 'text-sm/medium';
            var1['variant'] = var12;
            var11 = var11.text;
            var1['style'] = var11;
            var7 = var7[var10];
            var8 = var8.bind(var5)(var7);
            var7 = var8.formatEndedTimestamp;
            var7 = var7.bind(var8)(var6, var9);
            var1['children'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0001_ip = 196; continue _fun0001;
 179:
            var3 = _closure1_slot11;
            var2 = {};
            var2['entry'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 196:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function BaseBadge(arg1) {
        var1 = arg1;
        var8 = var1.Icon;
        var11 = var1.iconColor;
        var9 = var1.text;
        var1 = _closure1_slot10;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var10.badgeContainer;
        var1['style'] = var5;
        var7 = _closure1_slot7;
        var5 = {};
        var12 = var10.icon;
        var5['style'] = var12;
        var5['color'] = var11;
        var7 = var7.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot0;
        var11 = _closure1_slot2;
        var6 = 10;
        var6 = var11[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var11 = 'text-sm/medium';
        var6['variant'] = var11;
        var10 = var10.text;
        var6['style'] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot7 = var5;
    var5 = var4.jsxs;
    var _closure1_slot8 = var5;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createStyles;
    var4 = {};
    var9 = {'width': 16, 'height': 16};
    var4['icon'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 4, 'backgroundColor': 'rgba(255, 255, 255, 0.08)', 'paddingVertical': null, 'paddingLeft': null, 'paddingRight': 10};
    var10 = 6;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['paddingVertical'] = var12;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingLeft'] = var12;
    var12 = var7[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var4['badgeContainer'] = var9;
    var9 = {};
    var10 = var7[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    var9['color'] = var10;
    var4['text'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = function ActiveTimestamp(arg1) {
        var1 = arg1;
        var9 = var1.entry;
        var _closure2_slot0 = var9;
        var6 = var1.style;
        var1 = function useTimestampTickedNow() {
            var5 = _closure1_slot4;
            var4 = var5.useState;
            var3 = global;
            var6 = var3.Date;
            var3 = var6.now;
            var3 = var3.bind(var6)();
            var6 = var4.bind(var5)(var3);
            var4 = _closure1_slot3;
            var3 = undefined;
            var1 = 2;
            var4 = var4.bind(var3)(var6, var1);
            var1 = 0;
            var1 = var4[var1];
            var3 = 1;
            var3 = var4[var3];
            var _closure3_slot0 = var3;
            var4 = var5.useEffect;
            var3 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 7;
                var3 = var7[var3];
                var6 = undefined;
                var3 = var4.bind(var6)(var3);
                var3 = var3.Interval;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var10 = var4;
                var3 = new var10[var3](var9);
                var5 = var3 instanceof Object ? var3 : var4;
                var _closure4_slot0 = var5;
                var4 = var5.start;
                var3 = _closure1_slot1;
                var2 = 8;
                var2 = var7[var2];
                var2 = var3.bind(var6)(var2);
                var2 = var2.Millis;
                var3 = var2.SECOND;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = var4.bind(var5)(var3, var2);
                var1 = function() {
                    var2 = _closure4_slot0;
                    var1 = var2.stop;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var4 = undefined;
        var8 = var1.bind(var4)();
        var _closure2_slot1 = var8;
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var3 = new Array(2);
        var3[0] = var9;
        var3[1] = var8;
        var2 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.formatActiveTimestamp;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5 = var5.bind(var7)(var2, var3);
        var3 = _closure1_slot7;
        var2 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 10;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Text;
        var1 = {'style': null, 'variant': 'text-sm/medium', 'tabularNumbers': true, 'color': 'text-positive'};
        var1['style'] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var4;
    var5 = 21;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/content_inventory/Badges.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ActiveTimestamp'] = var4;
    var4 = function GameTimestampBadge(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var9 = var1.entry;
            var1 = _closure1_slot10;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isEntryActive;
            var2 = var1.bind(var2)(var9);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.colors;
            if(var2) { _fun0002_ip = 89; continue _fun0002 }
 81:
            var10 = var1.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun0002_ip = 95; continue _fun0002;
 89:
            var10 = var1.STATUS_POSITIVE;
 95:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.badgeContainer;
            var1['style'] = var5;
            var8 = _closure1_slot7;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 12;
            var5 = var12[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.GameControllerIcon;
            var5 = {};
            var11 = var11.icon;
            var5['style'] = var11;
            var5['color'] = var10;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot12;
            var6 = {};
            var6['entry'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['GameTimestampBadge'] = var4;
    var4 = function MarathonBadge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 9;
            var1 = var1[var4];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.isEntryMarathon;
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0003_ip = 52; continue _fun0003 }
 48:
            var1 = null;
            return var1;
 52:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var2 = var2.bind(var5)(var1);
            var1 = var2.isEntryActive;
            var2 = var1.bind(var2)(var3);
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.colors;
            if(var2) { _fun0003_ip = 116; continue _fun0003 }
 108:
            var7 = var1.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            _fun0003_ip = 122; continue _fun0003;
 116:
            var7 = var1.STATUS_POSITIVE;
 122:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var2 = var2.bind(var5)(var1);
            var1 = var2.getMarathonDescription;
            var1 = var1.bind(var2)(var3);
            var6 = var1.text;
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0003_ip = 220; continue _fun0003 }
 164:
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var8 = 13;
            var8 = var10[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.TimerIcon;
            var2['Icon'] = var8;
            var2['iconColor'] = var7;
            var2['text'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 220:
            return var1;
        }
    };
    var3['MarathonBadge'] = var4;
    var4 = function NewGameBadge(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.isEntryNew;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            if(!var2) { _fun0004_ip = 185; continue _fun0004 }
 53:
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 14;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.NewUserIcon;
            var2['Icon'] = var7;
            var7 = 15;
            var9 = var8[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.keY6mZ;
            var7 = var9.bind(var10)(var7);
            var2['text'] = var7;
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.STATUS_POSITIVE;
            var2['iconColor'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 185:
            return var1;
        }
    };
    var3['NewGameBadge'] = var4;
    var4 = function StreakBadge(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getStreakCount;
            var12 = var1.bind(var2)(var3);
            var3 = null;
            var2 = var3 == var12;
            var1 = null;
            if(var2) { _fun0005_ip = 214; continue _fun0005 }
 59:
            var2 = 2;
            var2 = var12 < var2;
            var1 = null;
            if(var2) { _fun0005_ip = 214; continue _fun0005 }
 74:
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 16;
            var7 = var8[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.FlashIcon;
            var2['Icon'] = var7;
            var7 = 15;
            var10 = var8[var7];
            var10 = var9.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.formatToPlainString;
            var7 = var8[var7];
            var7 = var9.bind(var5)(var7);
            var7 = var7.t;
            var9 = var7.Klie/P;
            var7 = {};
            var7['days'] = var12;
            var7 = var10.bind(var11)(var9, var7);
            var2['text'] = var7;
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            var2['iconColor'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 214:
            return var1;
        }
    };
    var3['StreakBadge'] = var4;
    var4 = function TrendingBadge(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getTrendingType;
            var3 = var1.bind(var2)(var3);
            var4 = null;
            var2 = var4 == var3;
            var1 = null;
            if(var2) { _fun0006_ip = 230; continue _fun0006 }
 59:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var2 = var2.TrendingType;
            var2 = var2.TRENDING_TYPE_UNSPECIFIED;
            var1 = null;
            if(!(var3 !== var2)) { _fun0006_ip = 230; continue _fun0006 }
 100:
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 18;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.FireIcon;
            var2['Icon'] = var7;
            var7 = 15;
            var9 = var8[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.TsWCdX;
            var7 = var9.bind(var10)(var7);
            var2['text'] = var7;
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            var2['iconColor'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 230:
            return var1;
        }
    };
    var3['TrendingBadge'] = var4;
    var4 = function ResurrectedBadge(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getResurrectedEntryLastPlayTime;
            var2 = var1.bind(var2)(var3);
            var1 = null;
            var2 = var1 == var2;
            if(var2) { _fun0007_ip = 189; continue _fun0007 }
 57:
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var11 = _closure1_slot0;
            var8 = _closure1_slot2;
            var7 = 19;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.RetryIcon;
            var2['Icon'] = var7;
            var7 = 15;
            var9 = var8[var7];
            var9 = var11.bind(var5)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var7 = var8[var7];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.adnLsL;
            var7 = var9.bind(var10)(var7);
            var2['text'] = var7;
            var7 = _closure1_slot1;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            var2['iconColor'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 189:
            return var1;
        }
    };
    var3['ResurrectedBadge'] = var4;
    var4 = function TopGameBadge(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var3 = var1.entry;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var5 = undefined;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getEntryDuration;
            var19 = var1.bind(var2)(var3);
            var1 = null;
            if(!(var1 != var19)) { _fun0008_ip = 328; continue _fun0008 }
 54:
            var13 = _closure1_slot0;
            var8 = _closure1_slot2;
            var12 = 15;
            var2 = var8[var12];
            var2 = var13.bind(var5)(var2);
            var2 = var2.t;
            var15 = var2.SDRHgo;
            var4 = _closure1_slot7;
            var3 = _closure1_slot13;
            var2 = {};
            var6 = 20;
            var6 = var8[var6];
            var6 = var13.bind(var5)(var6);
            var6 = var6.TrophyIcon;
            var2['Icon'] = var6;
            var10 = _closure1_slot8;
            var9 = _closure1_slot9;
            var6 = {};
            var11 = var8[var12];
            var11 = var13.bind(var5)(var11);
            var16 = var11.intl;
            var14 = var16.string;
            var11 = var8[var12];
            var11 = var13.bind(var5)(var11);
            var11 = var11.t;
            var11 = var11./50eHh;
            var14 = var14.bind(var16)(var11);
            var11 = new Array(3);
            var11[0] = var14;
            var14 = ': ';
            var11[1] = var14;
            var12 = var8[var12];
            var12 = var13.bind(var5)(var12);
            var14 = var12.intl;
            var13 = var14.format;
            var12 = {};
            var16 = global;
            var18 = var16.Math;
            var17 = var18.round;
            var7 = _closure1_slot1;
            var16 = 8;
            var16 = var8[var16];
            var16 = var7.bind(var5)(var16);
            var16 = var16.Seconds;
            var16 = var16.HOUR;
            var16 = var19 / var16;
            var16 = var17.bind(var18)(var16);
            var12['hours'] = var16;
            var12 = var13.bind(var14)(var15, var12);
            var11[2] = var12;
            var6['children'] = var11;
            var6 = var10.bind(var5)(var9, var6);
            var2['text'] = var6;
            var6 = 6;
            var6 = var8[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.colors;
            var6 = var6.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
            var2['iconColor'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 328:
            return var1;
        }
    };
    var3['TopGameBadge'] = var4;
    var2 = function CustomStatusTimestampBadge(arg1) {
        var1 = arg1;
        var9 = var1.entry;
        var1 = _closure1_slot10;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var10.badgeContainer;
        var1['style'] = var5;
        var8 = _closure1_slot7;
        var7 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 13;
        var5 = var12[var5];
        var5 = var7.bind(var4)(var5);
        var7 = var5.TimerIcon;
        var5 = {};
        var10 = var10.icon;
        var5['style'] = var10;
        var11 = _closure1_slot1;
        var10 = 6;
        var10 = var12[var10];
        var10 = var11.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.INTERACTIVE_NORMAL;
        var5['color'] = var10;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var8 = _closure1_slot7;
        var7 = _closure1_slot12;
        var6 = {};
        var6['entry'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['CustomStatusTimestampBadge'] = var2;
    return var1;
})();