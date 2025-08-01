// app/i18n/native/updateRules.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var7;
    var2 = function I18nLink(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = var1.node;
            var _closure2_slot0 = var5;
            var7 = var1.output;
            var6 = var1.state;
            var9 = {};
            var10 = _closure1_slot3;
            var8 = var10.useContext;
            var11 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 5;
            var3 = var4[var3];
            var4 = undefined;
            var3 = var11.bind(var4)(var3);
            var3 = var3.AccessibilityPreferencesContext;
            var3 = var8.bind(var10)(var3);
            var8 = var3.alwaysShowLinkDecorations;
            var3 = _closure1_slot6;
            var8 = var3.bind(var4)(var8);
            var3 = var5.context;
            var10 = null;
            if(!(var10 != var3)) { _fun0001_ip = 147; continue _fun0001 }
 100:
            var11 = var5.context;
            var3 = var5.target;
            var3 = var11[var3];
            if(!var3) { _fun0001_ip = 127; continue _fun0001 }
 118:
            var11 = var3.onClick;
            if(var11) { _fun0001_ip = 135; continue _fun0001 }
 127:
            var9['onClick'] = var3;
            _fun0001_ip = 147; continue _fun0001;
 135:
            var3 = var3.onClick;
            var9['onClick'] = var3;
 147:
            var3 = var9.onClick;
            if(!(var10 == var3)) { _fun0001_ip = 170; continue _fun0001 }
 157:
            var2 = function() {
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 6;
                var1 = var6[var1];
                var4 = undefined;
                var3 = var5.bind(var4)(var1);
                var2 = var3.openURL;
                var1 = 7;
                var1 = var6[var1];
                var5 = var5.bind(var4)(var1);
                var4 = var5.sanitizeUrl;
                var1 = _closure2_slot0;
                var1 = var1.target;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var9['onClick'] = var2;
 170:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 8;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'accessible': true, 'accessibilityRole': 'link'};
            var9 = var9.onClick;
            var1['onPress'] = var9;
            var8 = var8.link;
            var1['style'] = var8;
            var5 = var5.content;
            var5 = var7.bind(var4)(var5, var6);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.Fonts;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot4 = var5;
    var5 = {};
    var8 = {};
    var9 = var9.PRIMARY_SEMIBOLD;
    var8['fontFamily'] = var9;
    var5['strong'] = var8;
    var8 = {};
    var9 = 'italic';
    var8['fontStyle'] = var9;
    var5['italic'] = var8;
    var8 = {};
    var9 = 'underline';
    var8['textDecorationLine'] = var9;
    var5['underline'] = var8;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = {};
            var2 = {};
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 4;
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
    var5 = var8.bind(var9)(var5);
    var _closure1_slot6 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'i18n/native/updateRules.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function updateRules(arg1) {
        var1 = arg1;
        var2 = {};
        var6 = var1.paragraph;
        var7 = var2;
        var4 = copyDataProperties(var7, var6);
        var5 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot4;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = arg1;
            var7 = var6.content;
            var6 = arg2;
            var6 = var6.bind(var4)(var7, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var4 = 'react';
        var2[var4] = var5;
        var1['paragraph'] = var2;
        var2 = {};
        var6 = var1.strong;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var5 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot4;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.strong;
            var2['style'] = var6;
            var6 = arg1;
            var7 = var6.content;
            var6 = arg2;
            var6 = var6.bind(var4)(var7, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2[var4] = var5;
        var1['strong'] = var2;
        var2 = {};
        var6 = var1.em;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var5 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot4;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.italic;
            var2['style'] = var6;
            var6 = arg1;
            var7 = var6.content;
            var6 = arg2;
            var6 = var6.bind(var4)(var7, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2[var4] = var5;
        var1['em'] = var2;
        var2 = {};
        var6 = var1.u;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var5 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot4;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.underline;
            var2['style'] = var6;
            var6 = arg1;
            var7 = var6.content;
            var6 = arg2;
            var6 = var6.bind(var4)(var7, var1);
            var2['children'] = var6;
            var1 = var1.key;
            var1 = var5.bind(var4)(var3, var2, var1);
            return var1;
        };
        var2[var4] = var5;
        var1['u'] = var2;
        var2 = {};
        var6 = var1.link;
        var7 = var2;
        var5 = copyDataProperties(var7, var6);
        var3 = function react(arg1, arg2, arg3) {
            var1 = arg3;
            var5 = _closure1_slot4;
            var4 = _closure1_slot7;
            var3 = {};
            var2 = arg1;
            var3['node'] = var2;
            var2 = arg2;
            var3['output'] = var2;
            var3['state'] = var1;
            var2 = var1.key;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3, var2);
            return var1;
        };
        var2[var4] = var3;
        var1['link'] = var2;
        return var1;
    };
    var3['default'] = var4;
    var3['I18nLink'] = var2;
    return var1;
})();