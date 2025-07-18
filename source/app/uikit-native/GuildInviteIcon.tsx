// app/uikit-native/GuildInviteIcon.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var14 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var8 = 1;
    var4 = var6[var8];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.View;
    var _closure1_slot8 = var9;
    var11 = var4.StyleSheet;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = {};
    var9 = 'small';
    var4['SMALL'] = var9;
    var9 = 'medium';
    var4['MEDIUM'] = var9;
    var9 = 'large';
    var4['LARGE'] = var9;
    var9 = [16, 16, 14, 14, 12];
    var _closure1_slot10 = var9;
    var10 = var11.create;
    var9 = {};
    var12 = {'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var9['icon'] = var12;
    var12 = {'width': 40, 'height': 40, 'borderRadius': 20};
    var9['iconSmall'] = var12;
    var12 = {'width': 80, 'height': 80, 'borderRadius': 40};
    var9['iconMedium'] = var12;
    var12 = {'width': 128, 'height': 128};
    var13 = 8;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var12['borderRadius'] = var15;
    var9['iconLarge'] = var12;
    var12 = {};
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.BRAND_500;
    var12['backgroundColor'] = var15;
    var9['textContainer'] = var12;
    var12 = {};
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.WHITE_500;
    var12['color'] = var13;
    var9['acronym'] = var12;
    var9 = var10.bind(var11)(var9);
    var _closure1_slot11 = var9;
    var7 = var7.PureComponent;
    var2 = function(arg1) {
        var4 = function GuildInviteIcon() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot4;
        var5 = {};
        var6 = 'render';
        var5['key'] = var6;
        var1 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = this;
                var1 = var1.props;
                var7 = var1.style;
                var10 = var1.guild;
                var9 = var1.size;
                var2 = var1.textScale;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 9;
                var1 = var4[var1];
                var4 = undefined;
                var8 = var3.bind(var4)(var1);
                var5 = var8.getClass;
                var3 = _closure1_slot11;
                var1 = 'icon';
                var8 = var5.bind(var8)(var3, var1, var9);
                var3 = var10.icon;
                var1 = null;
                if(!(var1 == var3)) { _fun0003_ip = 295; continue _fun0003 }
 89:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 12;
                var3 = var9[var3];
                var9 = var5.bind(var4)(var3);
                var5 = var9.getAcronym;
                var3 = var10.name;
                var11 = var5.bind(var9)(var3);
                var5 = _closure1_slot10;
                var3 = var11.length;
                var13 = 1;
                var3 = var3 - var13;
                var3 = var5[var3];
                var5 = var1 != var3;
                var1 = 10;
                if(!var5) { _fun0003_ip = 158; continue _fun0003 }
 155:
                var1 = var3;
 158:
                var14 = var1 * var2;
                var3 = _closure1_slot9;
                var2 = _closure1_slot8;
                var1 = {};
                var12 = _closure1_slot11;
                var9 = var12.textContainer;
                var5 = new Array(4);
                var5[0] = var9;
                var9 = var12.icon;
                var5[1] = var9;
                var5[2] = var8;
                var5[3] = var7;
                var1['style'] = var5;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 13;
                var5 = var15[var5];
                var5 = var9.bind(var4)(var5);
                var9 = var5.LegacyText;
                var5 = {};
                var5['numberOfLines'] = var13;
                var13 = var12.acronym;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = {};
                var13['fontSize'] = var14;
                var12[1] = var13;
                var5['style'] = var12;
                var5['children'] = var11;
                var5 = var3.bind(var4)(var9, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
 295:
                var2 = _closure1_slot1;
                var9 = _closure1_slot2;
                var1 = 10;
                var1 = var9[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.getGuildIconSource;
                var1 = {};
                var11 = var10.id;
                var1['id'] = var11;
                var10 = var10.icon;
                var1['icon'] = var10;
                var10 = true;
                var1['canAnimate'] = var10;
                var10 = 128;
                var1['size'] = var10;
                var5 = var3.bind(var5)(var1);
                var3 = _closure1_slot9;
                var1 = 11;
                var1 = var9[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var6 = _closure1_slot11;
                var9 = var6.icon;
                var6 = new Array(3);
                var6[0] = var9;
                var6[1] = var8;
                var6[2] = var7;
                var1['style'] = var6;
                var1['source'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var7);
    var7 = {};
    var9 = var4.SMALL;
    var7['size'] = var9;
    var7['textScale'] = var8;
    var2['defaultProps'] = var7;
    var2['Sizes'] = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/GuildInviteIcon.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();