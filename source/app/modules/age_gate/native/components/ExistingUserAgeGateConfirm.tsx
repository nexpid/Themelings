// app/modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AgeGateSource;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.HelpdeskArticles;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'padding': 16, 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['container'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['header'] = var9;
    var9 = {'textAlign': 'center', 'lineHeight': 20, 'marginBottom': 16};
    var4['body'] = var9;
    var9 = {'width': '100%', 'flexGrow': 0};
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ExistingUserAgeGateConfirm(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var20 = var1.age;
            var2 = var1.onConfirm;
            var _closure2_slot0 = var2;
            var2 = var1.source;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var1 = function _handleConfirm() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 99; continue _fun0002 }
 7:
                            var5 = _closure2_slot2;
                            var2 = undefined;
                            var4 = true;
                            var4 = var5.bind(var2)(var4);
 23: // try_start_0
                            var4 = _closure2_slot0;
                            var4 = var4.bind(var2)();
                            SaveGenerator(address=35);
 33:
                            return var4;
 35:
                            ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 66; continue _fun0002 }
 41:
                            var5 = var4.shouldShowError;
                            if(!var5) { _fun0002_ip = 64; continue _fun0002 }
 50:
                            var6 = _closure2_slot1;
                            var5 = var6.pop;
                            var5 = var5.bind(var6)();
 64: // try_end0
                            _fun0002_ip = 85; continue _fun0002;
 66:
                            return var4;
 69: // catch_target0
                            CatchBlockStart(arg_register=3);
                            var5 = _closure2_slot1;
                            var4 = var5.pop;
                            var4 = var4.bind(var5)();
 85:
                            var4 = _closure2_slot2;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
 99:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot3 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot3 = var1;
            var1 = _closure1_slot10;
            var11 = var1.bind(var4)();
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var3 = var13.bind(var4)(var1);
            var1 = var3.useNavigation;
            var1 = var1.bind(var3)();
            _closure2_slot1 = var1;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var1 = false;
            var5 = var3.bind(var5)(var1);
            var3 = _closure1_slot4;
            var1 = 2;
            var3 = var3.bind(var4)(var5, var1);
            var1 = 0;
            var12 = var3[var1];
            var1 = 1;
            var1 = var3[var1];
            _closure2_slot2 = var1;
            var1 = _closure1_slot6;
            var1 = var1.NSFW_SERVER;
            if(!(var1 !== var2)) { _fun0001_ip = 285; continue _fun0001 }
 155:
            var1 = _closure1_slot6;
            var1 = var1.NSFW_SERVER_INVITE;
            if(!(var1 !== var2)) { _fun0001_ip = 285; continue _fun0001 }
 169:
            var1 = _closure1_slot6;
            var1 = var1.NSFW_SERVER_INVITE_EMBED;
            if(!(var1 !== var2)) { _fun0001_ip = 285; continue _fun0001 }
 183:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var3 = var10[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.n3QjDA;
            var1 = {};
            var8 = _closure1_slot1;
            var7 = 9;
            var7 = var10[var7];
            var10 = var8.bind(var4)(var7);
            var8 = var10.getArticleURL;
            var7 = _closure1_slot7;
            var7 = var7.AGE_GATE;
            var7 = var8.bind(var10)(var7);
            var1['helpURL'] = var7;
            var16 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 385; continue _fun0001;
 285:
            var2 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 8;
            var3 = var10[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var10[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.6ejLER;
            var1 = {};
            var8 = _closure1_slot1;
            var7 = 9;
            var7 = var10[var7];
            var10 = var8.bind(var4)(var7);
            var8 = var10.getArticleURL;
            var7 = _closure1_slot7;
            var7 = var7.AGE_GATE;
            var7 = var8.bind(var10)(var7);
            var1['helpURL'] = var7;
            var16 = var3.bind(var5)(var2, var1);
 385:
            var3 = _closure1_slot9;
            var1 = 10;
            var1 = var14[var1];
            var1 = var13.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var5 = true;
            var1['top'] = var5;
            var5 = var11.container;
            var1['style'] = var5;
            var8 = _closure1_slot8;
            var5 = 11;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var10 = var11.header;
            var5['style'] = var10;
            var10 = 8;
            var15 = var14[var10];
            var15 = var13.bind(var4)(var15);
            var19 = var15.intl;
            var18 = var19.format;
            var15 = var14[var10];
            var15 = var13.bind(var4)(var15);
            var15 = var15.t;
            var17 = var15.wumolZ;
            var15 = {};
            var15['age'] = var20;
            var15 = var18.bind(var19)(var17, var15);
            var5['children'] = var15;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = 12;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var15 = var7.TextWithIOSLinkWorkaround;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-normal'};
            var17 = var11.body;
            var7['style'] = var17;
            var7['children'] = var16;
            var7 = var8.bind(var4)(var15, var7);
            var5[1] = var7;
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var14[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['loading'] = var12;
            var11 = var11.button;
            var6['style'] = var11;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.6tahio;
            var10 = var11.bind(var12)(var10);
            var6['text'] = var10;
            var9 = function handleConfirm() {
                var1 = undefined;
                var4 = _closure2_slot3;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var6['onPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();