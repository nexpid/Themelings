// app/components_native/ErrorBoundary.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function MaybeClearBuildOverride() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = _closure1_slot10;
            var4 = var5.useState;
            var1 = false;
            var6 = var4.bind(var5)(var1);
            var4 = _closure1_slot9;
            var5 = undefined;
            var1 = 2;
            var4 = var4.bind(var5)(var6, var1);
            var1 = 0;
            var7 = var4[var1];
            var1 = 1;
            var1 = var4[var1];
            var _closure2_slot0 = var1;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var8 = var4.bind(var5)(var1);
            var6 = var8.useStateFromStores;
            var1 = _closure1_slot13;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot13;
                    var1 = var3.getCurrentBuildOverride;
                    var1 = var1.bind(var3)();
                    var5 = var1.overrides;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 80; continue _fun0003 }
 36:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 12;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.DEVICE_FIELD;
                    var2 = var5[var2];
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0003_ip = 80; continue _fun0003 }
 75:
                    var1 = var2.id;
 80:
                    return var1;
                }
            };
            var4 = var6.bind(var8)(var4, var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 233; continue _fun0002 }
 112:
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 94; continue _fun0004 }
 7: // try_start_0
                            var3 = _closure2_slot0;
                            var4 = undefined;
                            var2 = true;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 12;
                            var2 = var5[var2];
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.clearBuildOverride;
                            var2 = var2.bind(var3)();
                            SaveGenerator(address=60);
 58:
                            return var2;
 60:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 68; continue _fun0004 }
 66: // try_end0
                            _fun0004_ip = 89; continue _fun0004;
 68:
                            return var2;
 71: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot0;
                            var3 = undefined;
                            var2 = false;
                            var2 = var4.bind(var3)(var2);
 89:
                            var2 = undefined;
                            return var2;
 94:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var6 = var3.bind(var5)();
            var4 = _closure1_slot14;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Button;
            var2 = {};
            var8 = 'secondary';
            var2['variant'] = var8;
            var2['loading'] = var7;
            var7 = 14;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7./Nz9ra;
            var7 = var8.bind(var9)(var7);
            var2['text'] = var7;
            var2['onPress'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 233:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot10 = var4;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.NativeModules;
    var _closure1_slot11 = var9;
    var9 = var7.StyleSheet;
    var7 = var7.View;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.jsx;
    var _closure1_slot14 = var8;
    var7 = var7.jsxs;
    var _closure1_slot15 = var7;
    var8 = var9.create;
    var7 = {};
    var10 = {'position': 'absolute', 'right': 32, 'bottom': 32, 'left': 32, 'gap': 12};
    var7['buttons'] = var10;
    var11 = 'center';
    var10 = {'position': 'absolute', 'right': 32, 'top': 64, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 12};
    var7['debugLogsContainer'] = var10;
    var10 = {'marginTop': 24, 'textAlign': 'center'};
    var7['error'] = var10;
    var10 = {};
    var10['textAlign'] = var11;
    var7['text'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot16 = var7;
    var4 = var4.PureComponent;
    var2 = function(arg1) {
        var4 = function ErrorBoundary(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = {'error': null, 'info': null};
                var1['state'] = var2;
                var2 = false;
                var1['discordErrorsSet'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'componentDidCatch';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            var4 = this;
            var3 = var4.triggerSoftCrash;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'triggerSoftCrash';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var7 = arg1;
            var8 = arg2;
            var3 = this;
            var2 = var3.setState;
            var1 = {};
            var1['error'] = var7;
            var1['info'] = var8;
            var1 = var2.bind(var3)(var1);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 15;
            var2 = var4[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.captureCrash;
            var2 = {};
            var2['extra'] = var8;
            var2 = var5.bind(var6)(var7, var2);
            var2 = 16;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {'type': 'CLEAR_CACHES', 'reason': 'App Crashed'};
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleReload';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var2 = var1.BundleUpdaterManager;
            var1 = var2.reload;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'componentDidMount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = global;
                var3 = var1.window;
                var5 = var3.DiscordErrors;
                var3 = null;
                if(!(var3 == var5)) { _fun0006_ip = 63; continue _fun0006 }
 29:
                var3 = var1.window;
                var1 = {};
                var4 = function softCrash(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.triggerSoftCrash;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1['softCrash'] = var4;
                var3['DiscordErrors'] = var1;
                var1 = true;
                var2['discordErrorsSet'] = var1;
 63:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = this;
                var1 = var2.discordErrorsSet;
                if(!var1) { _fun0007_ip = 36; continue _fun0007 }
 12:
                var1 = global;
                var3 = var1.window;
                var1 = null;
                var3['DiscordErrors'] = var1;
                var1 = false;
                var2['discordErrorsSet'] = var1;
 36:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var15 = this;
                var1 = var15.state;
                var13 = var1.error;
                var7 = null;
                if(!(var7 === var13)) { _fun0008_ip = 34; continue _fun0008 }
 19:
                var1 = var15.props;
                var1 = var1.children;
                _fun0008_ip = 514; continue _fun0008;
 34:
                var5 = _closure1_slot15;
                var3 = _closure1_slot1;
                var11 = _closure1_slot2;
                var2 = 17;
                var2 = var11[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = _closure1_slot0;
                var6 = 18;
                var6 = var11[var6];
                var6 = var8.bind(var4)(var6);
                var6 = var6.AppCrash;
                var2['Illustration'] = var6;
                var20 = 14;
                var6 = var11[var20];
                var6 = var8.bind(var4)(var6);
                var10 = var6.intl;
                var9 = var10.string;
                var6 = var11[var20];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.tx8CkJ;
                var6 = var9.bind(var10)(var6);
                var2['title'] = var6;
                var6 = var11[var20];
                var6 = var8.bind(var4)(var6);
                var10 = var6.intl;
                var9 = var10.string;
                var6 = var11[var20];
                var6 = var8.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6.CvQlAA;
                var6 = var9.bind(var10)(var6);
                var2['body'] = var6;
                var10 = _closure1_slot16;
                var6 = var10.text;
                var2['titleStyle'] = var6;
                var6 = var10.text;
                var2['bodyStyle'] = var6;
                var9 = _closure1_slot14;
                var6 = 19;
                var6 = var11[var6];
                var6 = var8.bind(var4)(var6);
                var8 = var6.Text;
                var6 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted'};
                var10 = var10.error;
                var6['style'] = var10;
                var10 = var7 == var13;
                var11 = undefined;
                if(var10) { _fun0008_ip = 279; continue _fun0008 }
 274:
                var11 = var13.message;
 279:
                if(!(var7 == var11)) { _fun0008_ip = 300; continue _fun0008 }
 283:
                var14 = var7 == var13;
                var10 = undefined;
                if(var14) { _fun0008_ip = 297; continue _fun0008 }
 292:
                var10 = var13.name;
 297:
                var11 = var10;
 300:
                var13 = var7 != var11;
                var10 = 'Unknown Error';
                if(!var13) { _fun0008_ip = 316; continue _fun0008 }
 313:
                var10 = var11;
 316:
                var6['children'] = var10;
                var8 = var9.bind(var4)(var8, var6);
                var6 = new Array(3);
                var6[0] = var8;
                var10 = _closure1_slot15;
                var9 = _closure1_slot12;
                var8 = {};
                var11 = _closure1_slot16;
                var11 = var11.buttons;
                var8['style'] = var11;
                var14 = _closure1_slot14;
                var13 = _closure1_slot18;
                var11 = {};
                var13 = var14.bind(var4)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                var14 = _closure1_slot14;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 13;
                var12 = var16[var12];
                var12 = var19.bind(var4)(var12);
                var13 = var12.Button;
                var12 = {};
                var17 = var16[var20];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.4n8OJi;
                var16 = var17.bind(var18)(var16);
                var12['text'] = var16;
                var15 = var15.handleReload;
                var12['onPress'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                var11[1] = var12;
                var8['children'] = var11;
                var8 = var10.bind(var4)(var9, var8);
                var6[1] = var8;
                var6[2] = var7;
                var2['children'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 514:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/ErrorBoundary.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();