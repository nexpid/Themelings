// app/modules/profile_customization/native/BioText.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function LinkButton(arg1) {
        var1 = arg1;
        var10 = var1.lineClamp;
        var9 = var1.text;
        var1 = _closure1_slot10;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot8;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = function onPress() {
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
            var2 = var4[var1];
            var1 = undefined;
            var7 = var3.bind(var1)(var2);
            var5 = var7.openURL;
            var2 = _closure1_slot6;
            var2 = var5.bind(var7)(var2);
            var2 = 7;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.CHANGE_LOG_CTA_CLICKED;
            var2 = {};
            var7 = 'profile_bio';
            var2['cta_type'] = var7;
            var6 = _closure1_slot6;
            var2['target'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var1['onPress'] = var6;
        var6 = var8.link;
        var1['style'] = var6;
        var7 = _closure1_slot7;
        var6 = _closure1_slot0;
        var11 = _closure1_slot2;
        var5 = 8;
        var5 = var11[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-md/normal', 'color': 'text-link'};
        var5['lineClamp'] = var10;
        var8 = var8.link;
        var5['style'] = var8;
        var8 = ['\n'];
        var8[1] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CHANGELOG_URL;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot7 = var7;
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.Fragment;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'alignSelf': 'stretch', 'textAlignVertical': 'top', 'width': '100%', 'flexGrow': 1, 'paddingTop': 2, 'lineHeight': 24};
    var4['text'] = var9;
    var9 = {'alignSelf': 'stretch', 'textAlignVertical': 'bottom', 'width': '100%', 'flexGrow': 1, 'display': 'flex', 'paddingBottom': 2};
    var4['span'] = var9;
    var9 = {'alignSelf': 'stretch', 'textAlignVertical': 'bottom', 'width': '100%', 'flexGrow': 1, 'bottom': 4294967292, 'position': 'relative'};
    var4['link'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/native/BioText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function BioText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var8 = var3.placeholder;
            var1 = var3.bio;
            var _closure2_slot0 = var1;
            var12 = var3.lineClamp;
            var _closure2_slot1 = var12;
            var2 = var3.userId;
            var17 = var3.textVariant;
            var5 = undefined;
            if(!(var17 === var5)) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var17 = 'text-md/normal';
 54:
            var _closure2_slot2 = var17;
            var3 = _closure1_slot10;
            var11 = var3.bind(var5)();
            var9 = _closure1_slot3;
            var6 = var9.useMemo;
            var4 = new Array(2);
            var4[0] = var1;
            var4[1] = var17;
            var3 = function() {
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var5 = undefined;
                var4 = var2.bind(var5)(var1);
                var3 = var4.parseBioReact;
                var2 = _closure2_slot0;
                var1 = {};
                var6 = _closure2_slot2;
                var1['linkVariant'] = var6;
                var1 = var3.bind(var4)(var2, var5, var1);
                return var1;
            };
            var6 = var6.bind(var9)(var3, var4);
            var3 = var1.length;
            var1 = 0;
            var16 = var1 === var3;
            if(!var16) { _fun0001_ip = 143; continue _fun0001 }
 115:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            var16 = !var1;
 143:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            if(var1) { _fun0001_ip = 272; continue _fun0001 }
 171:
            if(!var16) { _fun0001_ip = 183; continue _fun0001 }
 174:
            var1 = null;
            var2 = var1 == var8;
            if(var2) { _fun0001_ip = 267; continue _fun0001 }
 183:
            var4 = _closure1_slot8;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 8;
            var2 = var9[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var2['variant'] = var17;
            var9 = 'text-normal';
            if(!var16) { _fun0001_ip = 233; continue _fun0001 }
 227:
            var9 = 'text-muted';
 233:
            var2['color'] = var9;
            var2['lineClamp'] = var12;
            var9 = var11.text;
            var2['style'] = var9;
            if(!var16) { _fun0001_ip = 257; continue _fun0001 }
 254:
            var6 = var8;
 257:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 267:
            _fun0001_ip = 599; continue _fun0001;
 272:
            var4 = _closure1_slot7;
            var3 = _closure1_slot9;
            var2 = {};
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var18 = 8;
            var6 = var6[var18];
            var6 = var8.bind(var5)(var6);
            var19 = var6.Text;
            var10 = {};
            var10['variant'] = var17;
            var13 = 'text-normal';
            var6 = var13;
            if(!var16) { _fun0001_ip = 331; continue _fun0001 }
 325:
            var6 = 'text-muted';
 331:
            var10['color'] = var6;
            var10['lineClamp'] = var12;
            var6 = var11.text;
            var10['style'] = var6;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = 11;
            var6 = var8[var15];
            var6 = var9.bind(var5)(var6);
            var21 = var6.intl;
            var20 = var21.string;
            var6 = var8[var15];
            var6 = var9.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.OJmNR0;
            var20 = var20.bind(var21)(var6);
            var6 = new Array(2);
            var6[0] = var20;
            var20 = '\n';
            var6[1] = var20;
            var10['children'] = var6;
            var6 = 'changelog-bio';
            var10 = var4.bind(var5)(var19, var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            var10 = _closure1_slot8;
            var8 = var8[var18];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {};
            var8['variant'] = var17;
            if(!var16) { _fun0001_ip = 480; continue _fun0001 }
 474:
            var13 = 'text-muted';
 480:
            var8['color'] = var13;
            var8['lineClamp'] = var12;
            var11 = var11.span;
            var8['style'] = var11;
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var12 = var7[var15];
            var12 = var11.bind(var5)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var7 = var7[var15];
            var7 = var11.bind(var5)(var7);
            var7 = var7.t;
            var11 = var7.RCYeBA;
            var7 = {};
            var14 = function blogHook(arg1, arg2) {
                var5 = _closure1_slot8;
                var4 = _closure1_slot11;
                var3 = {};
                var1 = _closure2_slot1;
                var3['lineClamp'] = var1;
                var1 = arg1;
                var3['text'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var7['blogHook'] = var14;
            var7 = var12.bind(var13)(var11, var7);
            var8['children'] = var7;
            var7 = 'changelog-cta';
            var7 = var10.bind(var5)(var9, var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 599:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();