// app/intl/native/migration.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var2 = function IntlLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.target;
            var _closure2_slot0 = var3;
            var5 = var1.children;
            var8 = _closure1_slot3;
            var7 = var8.useContext;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 4;
            var6 = var6[var4];
            var4 = undefined;
            var6 = var9.bind(var4)(var6);
            var6 = var6.AccessibilityPreferencesContext;
            var6 = var7.bind(var8)(var6);
            var7 = var6.alwaysShowLinkDecorations;
            var6 = _closure1_slot5;
            var6 = var6.bind(var4)(var7);
            var9 = typeof var3;
            var7 = 'string';
            if(!(var7 !== var9)) { _fun0001_ip = 126; continue _fun0001 }
 92:
            var8 = 'object';
            var7 = var3;
            if(!(var8 === var9)) { _fun0001_ip = 124; continue _fun0001 }
 103:
            var9 = var3.onClick;
            var8 = null;
            var7 = var3;
            if(!(var8 != var9)) { _fun0001_ip = 124; continue _fun0001 }
 118:
            var7 = var3.onClick;
 124:
            _fun0001_ip = 131; continue _fun0001;
 126:
            var7 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 5;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var2 = var3.openURL;
                var1 = 6;
                var1 = var6[var1];
                var5 = var5.bind(var4)(var1);
                var4 = var5.sanitizeUrl;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
 131:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 7;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'accessible': true, 'accessibilityRole': 'link'};
            var1['onPress'] = var7;
            var6 = var6.link;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = {};
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 3;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.colors;
            var3 = var3.TEXT_LINK;
            var2['color'] = var3;
            var3 = 'none';
            var4 = arg1;
            if(!var4) { _fun0002_ip = 58; continue _fun0002 }
 54:
            var3 = 'underline';
 58:
            var2['textDecorationLine'] = var3;
            var1['link'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'intl/native/migration.tsx';
    var4 = var5.bind(var6)(var4);
    var3['IntlLink'] = var2;
    var3['I18nLinkComponent'] = var2;
    return var1;
})();