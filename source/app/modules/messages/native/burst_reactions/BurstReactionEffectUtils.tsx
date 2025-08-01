// app/modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NativeModules;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 649; continue _fun0001 }
 10:
                    var13 = arg1;
                    var5 = arg2;
                    var8 = arg3;
                    var2 = arg4;
                    var9 = undefined;
                    var16 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var11 = undefined;
                    var6 = undefined;
 34: // try_start_0
                    var12 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var10 = 4;
                    var10 = var14[var10];
                    var15 = var12.bind(var9)(var10);
                    var12 = var15.getEmojiUrl;
                    var10 = {};
                    var20 = var8;
                    var21 = var10;
                    var14 = copyDataProperties(var21, var20);
                    var17 = false;
                    var14 = 'animated';
                    var10[var14] = var17;
                    var14 = 128;
                    var12 = var12.bind(var15)(var10, var14);
                    var16 = var12;
                    var10 = null;
                    var17 = var10 != var12;
                    var12 = '';
                    var15 = var12;
                    if(!var17) { _fun0001_ip = 117; continue _fun0001 }
 114:
                    var15 = var16;
 117:
                    var3 = var15;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var15 = 5;
                    var15 = var17[var15];
                    var17 = var16.bind(var9)(var15);
                    var16 = var17.getBurstAnimation;
                    var21 = var13;
                    var20 = var5;
                    var5 = var8;
                    var19 = var5.name;
                    var18 = var2;
                    var22 = var17;
                    var2 = var22[var16](var21, var20, var19, var18, var17);
                    SaveGenerator(address=174);
 172:
                    return var2;
 174:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 639; continue _fun0001 }
 183:
                    var11 = var2;
                    var5 = var3;
                    if(!(var12 === var5)) { _fun0001_ip = 317; continue _fun0001 }
 196:
                    var5 = _closure1_slot5;
                    var13 = var5.ImageManager;
                    var12 = var13.getEmojiBase64;
                    var5 = var8;
                    var5 = var5.name;
                    var5 = var12.bind(var13)(var5, var14);
                    SaveGenerator(address=230);
 228:
                    return var5;
 230:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 314; continue _fun0001 }
 236:
                    var12 = global;
                    var12 = var12.HermesInternal;
                    var13 = var12.concat;
                    var12 = 'data:image/png;base64,';
                    var14 = var13.bind(var12)(var5);
                    var12 = var11;
                    var13 = var12.assets;
                    var12 = 0;
                    var12 = var13[var12];
                    var12['p'] = var14;
                    var13 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var12 = 6;
                    var12 = var15[var12];
                    var13 = var13.bind(var9)(var12);
                    var12 = var13.makeSource;
                    var4 = var12.bind(var13)(var14);
                    _fun0001_ip = 430; continue _fun0001;
 314: // try_end0
                    return var5;
 317: // try_start_1
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var5 = 6;
                    var5 = var13[var5];
                    var12 = var12.bind(var9)(var5);
                    var5 = var12.makeSource;
                    var12 = var5.bind(var12)(var3);
                    var4 = var12;
                    var3 = _closure1_slot5;
                    var5 = var3.ImageManager;
                    var3 = var5.getAvatarBase64;
                    var3 = var3.bind(var5)(var12);
                    SaveGenerator(address=376);
 374:
                    return var3;
 376:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 636; continue _fun0001 }
 385:
                    var5 = var11;
                    var12 = var5.assets;
                    var5 = 0;
                    var12 = var12[var5];
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var13 = var5.concat;
                    var5 = 'data:image/png;base64,';
                    var5 = var13.bind(var5)(var3);
                    var12['p'] = var5;
 430:
                    var5 = global;
                    var13 = var5.JSON;
                    var12 = var13.stringify;
                    var6 = var12.bind(var13)(var11);
                    var8 = var8.id;
                    if(!(var10 == var8)) { _fun0001_ip = 492; continue _fun0001 }
 458:
                    var12 = var6;
                    var11 = var12.replace;
                    var10 = /"a":{"a":0,"k":\[64,64/;
                    var8 = '"a":{"a":0,"k":[36,36';
                    var6 = var11.bind(var12)(var10, var8);
 492:
                    var8 = _closure1_slot5;
                    var10 = var8.ImageManager;
                    var8 = var10.getDominantColors;
                    var4 = var8.bind(var10)(var4);
                    SaveGenerator(address=517);
 515:
                    return var4;
 517:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0001_ip = 633; continue _fun0001 }
 523:
                    var12 = _closure1_slot3;
                    var8 = 0;
                    var11 = var4[var8];
                    var10 = 3;
                    var10 = var12.bind(var9)(var11, var10);
                    var13 = var10[var8];
                    var8 = 1;
                    var12 = var10[var8];
                    var8 = 2;
                    var11 = var10[var8];
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var7 = 7;
                    var7 = var10[var7];
                    var10 = var8.bind(var9)(var7);
                    var9 = var10.replaceAnimationColors;
                    var8 = var6;
                    var7 = {};
                    var7['r'] = var13;
                    var7['g'] = var12;
                    var7['b'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var6 = var7;
                    var6 = var5.JSON;
                    var5 = var6.parse;
                    var5 = var5.bind(var6)(var7);
 630: // try_end1
                    return var5;
 633:
                    return var4;
 636:
                    return var3;
 639:
                    return var2;
 642: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=1);
                    var2 = null;
                    return var2;
 649:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function generateAnimationSource(arg1, arg2, arg3, arg4) {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot7 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 353; continue _fun0002 }
 13:
                    var5 = var2.animationSource;
                    var3 = var2.localImageSource;
                    var9 = undefined;
                    var4 = undefined;
                    var6 = undefined;
                    SaveGenerator(address=35);
 33:
                    return var9;
 35:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 350; continue _fun0002 }
 44: // try_start_0
                    var10 = _closure1_slot6;
                    var8 = var10.resolveAssetSource;
                    var3 = var8.bind(var10)(var3);
                    var10 = var3.uri;
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var3 = 6;
                    var3 = var11[var3];
                    var8 = var8.bind(var9)(var3);
                    var3 = var8.makeSource;
                    var10 = var3.bind(var8)(var10);
                    var4 = var10;
                    var3 = _closure1_slot5;
                    var8 = var3.ImageManager;
                    var3 = var8.getAvatarBase64;
                    var3 = var3.bind(var8)(var10);
                    SaveGenerator(address=127);
 125:
                    return var3;
 127:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 340; continue _fun0002 }
 136:
                    var12 = var5;
                    var5 = var12.assets;
                    var8 = 0;
                    var11 = var5[var8];
                    var5 = global;
                    var10 = var5.HermesInternal;
                    var13 = var10.concat;
                    var10 = 'data:image/png;base64,';
                    var10 = var13.bind(var10)(var3);
                    var11['p'] = var10;
                    var11 = var5.JSON;
                    var10 = var11.stringify;
                    var6 = var10.bind(var11)(var12);
                    var10 = _closure1_slot5;
                    var11 = var10.ImageManager;
                    var10 = var11.getDominantColors;
                    var4 = var10.bind(var11)(var4);
                    SaveGenerator(address=223);
 221:
                    return var4;
 223:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 337; continue _fun0002 }
 229:
                    var12 = _closure1_slot3;
                    var11 = var4[var8];
                    var10 = 3;
                    var10 = var12.bind(var9)(var11, var10);
                    var13 = var10[var8];
                    var8 = 1;
                    var12 = var10[var8];
                    var8 = 2;
                    var11 = var10[var8];
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var7 = 7;
                    var7 = var10[var7];
                    var10 = var8.bind(var9)(var7);
                    var9 = var10.replaceAnimationColors;
                    var8 = var6;
                    var7 = {};
                    var7['r'] = var13;
                    var7['g'] = var12;
                    var7['b'] = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var6 = var7;
                    var6 = var5.JSON;
                    var5 = var6.parse;
                    var5 = var5.bind(var6)(var7);
 334: // try_end0
                    return var5;
 337:
                    return var4;
 340:
                    return var3;
 343: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var3 = null;
                    return var3;
 350:
                    return var2;
 353:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function generateAnimationSourceFromLocalImage(arg1) {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/burst_reactions/BurstReactionEffectUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        var1 = arg1;
        var9 = var1.channelId;
        var _closure2_slot0 = var9;
        var8 = var1.messageId;
        var _closure2_slot1 = var8;
        var7 = var1.emoji;
        var _closure2_slot2 = var7;
        var6 = var1.isFullscreen;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = null;
        var10 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var10, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot4 = var3;
        var4 = var5.useEffect;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function() {
            var2 = function _getSource() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot2;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 78; continue _fun0003 }
 7:
                            var4 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0003_ip = 70; continue _fun0003 }
 20:
                            var8 = _closure1_slot7;
                            var12 = _closure2_slot0;
                            var11 = _closure2_slot1;
                            var10 = _closure2_slot2;
                            var9 = _closure2_slot3;
                            var4 = undefined;
                            var13 = undefined;
                            var2 = var13[var8](var12, var11, var10, var9, var8);
                            SaveGenerator(address=55);
 53:
                            return var2;
 55:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0003_ip = 75; continue _fun0003 }
 61:
                            var3 = _closure2_slot4;
                            var3 = var3.bind(var4)(var2);
 70:
                            var3 = undefined;
                            return var3;
 75:
                            return var2;
 78:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot0 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var2;
            var2 = function getSource() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = !var2;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useBurstReactionAnimationSource'] = var4;
    var2 = function(arg1) {
        var1 = arg1;
        var7 = var1.animationSource;
        var _closure2_slot0 = var7;
        var6 = var1.localImageSource;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = null;
        var8 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var8, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot2 = var3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var2 = function _getSource2() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot2;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 69; continue _fun0004 }
 7:
                            var5 = _closure1_slot8;
                            var2 = {};
                            var3 = _closure2_slot0;
                            var2['animationSource'] = var3;
                            var3 = _closure2_slot1;
                            var2['localImageSource'] = var3;
                            var3 = undefined;
                            var2 = var5.bind(var3)(var2);
                            SaveGenerator(address=48);
 46:
                            return var2;
 48:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0004_ip = 66; continue _fun0004 }
 54:
                            var4 = _closure2_slot2;
                            var4 = var4.bind(var3)(var2);
                            return var3;
 66:
                            return var2;
 69:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure3_slot0 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure3_slot0 = var2;
            var2 = function getSource() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var2 = !var2;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useSuperReactionAnimationSourceFromLocalImage'] = var2;
    var2 = 128;
    var3['EMOJI_IN_ANIMATION_SIZE'] = var2;
    var2 = 0.8;
    var3['BACKDROP_OPACITY'] = var2;
    return var1;
})();