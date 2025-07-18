// app/modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var6;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ScrollView;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var10;
    var4['guildFeedBackground'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function OnboardingHomeScrollView(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildId;
            var2 = var1.headerOffset;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0001_ip = 26; continue _fun0001 }
 24:
            var2 = 0;
 26:
            var _closure2_slot0 = var2;
            var5 = var1.scrollValue;
            var _closure2_slot1 = var5;
            var5 = var1.children;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var6 = _closure1_slot5;
            var7 = var6.bind(var4)();
            var10 = _closure1_slot2;
            var9 = var10.useRef;
            var6 = false;
            var6 = var9.bind(var10)(var6);
            _closure2_slot2 = var6;
            var9 = var10.useRef;
            var6 = null;
            var9 = var9.bind(var10)(var6);
            _closure2_slot3 = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var6 = 5;
            var6 = var12[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.bind(var4)();
            var11 = var6.bottom;
            _closure2_slot4 = var11;
            var13 = var10.useEffect;
            var12 = new Array(1);
            var12[0] = var3;
            var6 = function() {
                var2 = _closure2_slot2;
                var1 = false;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var13.bind(var10)(var6, var12);
            var12 = var10.useRef;
            var6 = true;
            var6 = var12.bind(var10)(var6);
            _closure2_slot5 = var6;
            var12 = var10.useEffect;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    var2 = null;
                    var2 = var2 == var3;
                    if(var2) { _fun0002_ip = 30; continue _fun0002 }
 21:
                    var3 = _closure2_slot5;
                    var2 = var3.current;
 30:
                    if(var2) { _fun0002_ip = 67; continue _fun0002 }
 33:
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var3 = var4.scrollTo;
                    var2 = {'animated': false, 'y': 0};
                    var2 = var3.bind(var4)(var2);
 67:
                    var2 = _closure2_slot5;
                    var1 = false;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var12.bind(var10)(var3, var6);
            var6 = var10.useMemo;
            var3 = new Array(2);
            var3[0] = var11;
            var3[1] = var2;
            var2 = function() {
                var1 = {};
                var4 = _closure2_slot4;
                var3 = 16;
                var3 = var3 + var4;
                var1['paddingBottom'] = var3;
                var2 = _closure2_slot0;
                var1['marginTop'] = var2;
                return var1;
            };
            var6 = var6.bind(var10)(var2, var3);
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            var1['ref'] = var9;
            var9 = {};
            var10 = 1;
            var9['right'] = var10;
            var1['scrollIndicatorInsets'] = var9;
            var8 = function onScroll(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.contentOffset;
                var3 = var1.y;
                var2 = _closure2_slot1;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var1['onScroll'] = var8;
            var8 = 16;
            var1['scrollEventThrottle'] = var8;
            var7 = var7.guildFeedBackground;
            var1['style'] = var7;
            var1['contentContainerStyle'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();