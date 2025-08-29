// app/modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsStickerCreate.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var15 = 2;
    var7 = var6[var15];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.Image;
    var _closure1_slot6 = var8;
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.HelpdeskArticles;
    var _closure1_slot10 = var8;
    var4 = var4.UPLOAD_STICKER_SIZE;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot12 = var8;
    var4 = var4.EmojiIntention;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MAX_STICKER_FILE_SIZE;
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot15 = var8;
    var8 = var4.Fragment;
    var _closure1_slot16 = var8;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 11;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var13;
    var4['container'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginTop'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginBottom'] = var13;
    var4['title'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var4['description'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginBottom'] = var13;
    var4['help'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginTop'] = var13;
    var4['stack'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_BACKGROUND;
    var10['backgroundColor'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['paddingHorizontal'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var10['paddingVertical'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_4;
    var10['marginBottom'] = var13;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.lg;
    var10['borderRadius'] = var13;
    var13 = 'row';
    var10['flexDirection'] = var13;
    var13 = 'center';
    var10['alignItems'] = var13;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var10['gap'] = var14;
    var4['emojiPreview'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['marginTop'] = var14;
    var4['stickerPreviewLabel'] = var10;
    var10 = {};
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INPUT_BACKGROUND;
    var10['backgroundColor'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10['marginBottom'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_64;
    var14 = var15 * var14;
    var10['height'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_64;
    var14 = var15 * var14;
    var10['width'] = var14;
    var14 = var6[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var10['borderRadius'] = var14;
    var10['justifyContent'] = var13;
    var10['alignItems'] = var13;
    var4['stickerPreview'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_96;
    var10['width'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_96;
    var10['height'] = var11;
    var4['stickerPreviewImage'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot18 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var19 = var1.stickerId;
            var _closure2_slot0 = var19;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var1 = var1.onFinish;
            var _closure2_slot2 = var1;
            var4 = undefined;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var1 = _closure1_slot18;
            var18 = var1.bind(var4)();
            var8 = _closure1_slot5;
            var1 = var8.useRef;
            var28 = null;
            var5 = var1.bind(var8)(var28);
            var _closure2_slot3 = var5;
            var1 = var8.useRef;
            var24 = var1.bind(var8)(var28);
            var _closure2_slot4 = var24;
            var1 = var8.useRef;
            var21 = var1.bind(var8)(var28);
            var _closure2_slot5 = var21;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var4);
            var7 = _closure1_slot4;
            var6 = 2;
            var1 = var7.bind(var4)(var1, var6);
            var3 = 0;
            var2 = var1[var3];
            var _closure2_slot6 = var2;
            var2 = 1;
            var23 = var1[var2];
            var _closure2_slot7 = var23;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var4);
            var1 = var7.bind(var4)(var1, var6);
            var9 = var1[var3];
            var _closure2_slot8 = var9;
            var20 = var1[var2];
            var _closure2_slot9 = var20;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var4);
            var1 = var7.bind(var4)(var1, var6);
            var34 = var1[var3];
            var _closure2_slot10 = var34;
            var1 = var1[var2];
            var _closure2_slot11 = var1;
            var1 = var8.useState;
            var1 = var1.bind(var8)(var4);
            var1 = var7.bind(var4)(var1, var6);
            var29 = var1[var3];
            var _closure2_slot12 = var29;
            var1 = var1[var2];
            var _closure2_slot13 = var1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 12;
            var1 = var2[var1];
            var6 = var3.bind(var4)(var1);
            var1 = {};
            var22 = true;
            var1['includeKeyboardHeightIOS'] = var22;
            var1 = var6.bind(var4)(var1);
            var6 = var1.insets;
            var1 = 13;
            var1 = var2[var1];
            var7 = var3.bind(var4)(var1);
            var1 = {};
            var1['insets'] = var6;
            var9 = {};
            var9['ref'] = var24;
            var8 = {};
            var11 = 'toRef';
            var8['type'] = var11;
            var8['ref'] = var21;
            var9['offset'] = var8;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var9['ref'] = var21;
            var11 = {};
            var12 = 'toBottom';
            var11['type'] = var12;
            var9['offset'] = var11;
            var8[1] = var9;
            var1['inputs'] = var8;
            var1['scrollViewRef'] = var5;
            var1 = var7.bind(var4)(var1);
            var17 = var1.onFocus;
            var1 = 14;
            var2 = var2[var1];
            var3 = var3.bind(var4)(var2);
            var7 = var28 != var19;
            var2 = undefined;
            if(!var7) { _fun0001_ip = 425; continue _fun0001 }
 410:
            var8 = _closure1_slot9;
            var7 = var8.getStickerById;
            var2 = var7.bind(var8)(var19);
 425:
            var36 = var3.bind(var4)(var2);
            _closure2_slot14 = var36;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = var7[var1];
            var2 = var8.bind(var4)(var1);
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot14;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0002_ip = 17; continue _fun0002 }
 13:
                    var1 = undefined;
                    return var1;
 17:
                    var1 = _closure2_slot14;
                    var1 = var1.tags;
                    var2 = var4 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 64; continue _fun0002 }
 36:
                    var6 = _closure1_slot8;
                    var3 = var6.getCustomEmojiById;
                    var2 = _closure2_slot14;
                    var2 = var2.tags;
                    var1 = var3.bind(var6)(var2);
 64:
                    if(!(var4 == var1)) { _fun0002_ip = 264; continue _fun0002 }
 71:
                    var2 = _closure2_slot14;
                    var2 = var2.tags;
                    var3 = var4 != var2;
                    var2 = undefined;
                    var7 = undefined;
                    if(!var3) { _fun0002_ip = 195; continue _fun0002 }
 92:
                    var8 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var9 = 15;
                    var3 = var3[var9];
                    var10 = var8.bind(var2)(var3);
                    var8 = var10.hasSurrogates;
                    var3 = _closure2_slot14;
                    var3 = var3.tags;
                    var3 = var8.bind(var10)(var3);
                    if(var3) { _fun0002_ip = 151; continue _fun0002 }
 139:
                    var3 = _closure2_slot14;
                    var3 = var3.tags;
                    _fun0002_ip = 192; continue _fun0002;
 151:
                    var8 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var9];
                    var9 = var8.bind(var2)(var6);
                    var8 = var9.convertSurrogateToName;
                    var5 = _closure2_slot14;
                    var6 = var5.tags;
                    var5 = false;
                    var3 = var8.bind(var9)(var6, var5);
 192:
                    var7 = var3;
 195:
                    var5 = var4 != var7;
                    var3 = undefined;
                    if(!var5) { _fun0002_ip = 250; continue _fun0002 }
 204:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 15;
                    var5 = var8[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getByName;
                    var5 = var5.bind(var6)(var7);
                    var6 = var4 != var5;
                    var3 = undefined;
                    if(!var6) { _fun0002_ip = 250; continue _fun0002 }
 247:
                    var3 = var5;
 250:
                    var4 = var4 != var3;
                    var2 = undefined;
                    if(!var4) { _fun0002_ip = 262; continue _fun0002 }
 259:
                    var2 = var3;
 262:
                    return var2;
 264:
                    return var1;
                }
            };
            var1 = var2.bind(var4)(var1);
            _closure2_slot15 = var1;
            var14 = function hasUnsavedChanges() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arguments[0];
                    var4 = undefined;
                    if(!(var1 === var4)) { _fun0003_ip = 11; continue _fun0003 }
 9:
                    var1 = true;
 11:
                    var2 = _closure2_slot14;
                    var6 = null;
                    if(!(var6 == var2)) { _fun0003_ip = 165; continue _fun0003 }
 27:
                    var2 = _closure2_slot6;
                    var2 = var6 != var2;
                    if(var1) { _fun0003_ip = 96; continue _fun0003 }
 38:
                    var1 = var2;
                    if(!var2) { _fun0003_ip = 72; continue _fun0003 }
 44:
                    var3 = _closure2_slot6;
                    var3 = var6 == var3;
                    var7 = undefined;
                    if(var3) { _fun0003_ip = 66; continue _fun0003 }
 57:
                    var3 = _closure2_slot6;
                    var7 = var3.length;
 66:
                    var3 = 0;
                    var1 = var7 > var3;
 72:
                    if(!var1) { _fun0003_ip = 83; continue _fun0003 }
 75:
                    var3 = _closure2_slot10;
                    var1 = var6 != var3;
 83:
                    if(!var1) { _fun0003_ip = 94; continue _fun0003 }
 86:
                    var3 = _closure2_slot12;
                    var1 = var6 != var3;
 94:
                    _fun0003_ip = 163; continue _fun0003;
 96:
                    if(!var2) { _fun0003_ip = 127; continue _fun0003 }
 99:
                    var3 = _closure2_slot6;
                    var3 = var6 == var3;
                    var4 = undefined;
                    if(var3) { _fun0003_ip = 121; continue _fun0003 }
 112:
                    var3 = _closure2_slot6;
                    var4 = var3.length;
 121:
                    var3 = 0;
                    var2 = var4 > var3;
 127:
                    if(var2) { _fun0003_ip = 138; continue _fun0003 }
 130:
                    var3 = _closure2_slot10;
                    var2 = var6 != var3;
 138:
                    if(var2) { _fun0003_ip = 149; continue _fun0003 }
 141:
                    var3 = _closure2_slot12;
                    var2 = var6 != var3;
 149:
                    if(var2) { _fun0003_ip = 160; continue _fun0003 }
 152:
                    var3 = _closure2_slot8;
                    var2 = var6 != var3;
 160:
                    var1 = var2;
 163:
                    _fun0003_ip = 262; continue _fun0003;
 165:
                    var2 = _closure2_slot6;
                    var2 = var6 != var2;
                    if(!var2) { _fun0003_ip = 193; continue _fun0003 }
 176:
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot14;
                    var3 = var3.name;
                    var2 = var4 !== var3;
 193:
                    if(var2) { _fun0003_ip = 259; continue _fun0003 }
 196:
                    var3 = _closure2_slot8;
                    var4 = var6 == var3;
                    if(var4) { _fun0003_ip = 224; continue _fun0003 }
 207:
                    var7 = _closure2_slot8;
                    var3 = _closure2_slot14;
                    var3 = var3.description;
                    var4 = var7 === var3;
 224:
                    var3 = !var4;
                    if(!var4) { _fun0003_ip = 256; continue _fun0003 }
 230:
                    var4 = _closure2_slot12;
                    var4 = var6 != var4;
                    if(!var4) { _fun0003_ip = 253; continue _fun0003 }
 241:
                    var6 = _closure2_slot12;
                    var5 = _closure2_slot15;
                    var4 = var6 !== var5;
 253:
                    var3 = var4;
 256:
                    var2 = var3;
 259:
                    var1 = var2;
 262:
                    return var1;
                }
            };
            _closure2_slot16 = var14;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 197; continue _fun0004 }
 10:
                            var2 = undefined;
                            var4 = undefined;
                            var5 = undefined;
 16: // try_start_0
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var3 = 16;
                            var3 = var8[var3];
                            var8 = var7.bind(var2)(var3);
                            var7 = var8.openImagePicker;
                            var3 = {};
                            var6 = _closure1_slot11;
                            var3['size'] = var6;
                            var6 = 'image/png';
                            var3['preferredMimeType'] = var6;
                            var3 = var7.bind(var8)(var3);
                            SaveGenerator(address=75);
 73:
                            return var3;
 75:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                            if(var7) { _fun0004_ip = 156; continue _fun0004 }
 81:
                            var8 = var3.base64;
                            var4 = var8;
                            var5 = var3.mimeType;
                            var7 = null;
                            if(!(var7 != var8)) { _fun0004_ip = 120; continue _fun0004 }
 102:
                            if(!(var6 === var5)) { _fun0004_ip = 120; continue _fun0004 }
 106:
                            var5 = _closure2_slot11;
                            var4 = var5.bind(var2)(var4);
 118: // try_end0
                            _fun0004_ip = 194; continue _fun0004;
 120: // try_start_1
                            var4 = global;
                            var6 = var4.Error;
                            var4 = var6.prototype;
                            var5 = Object.create(var4, {constructor: {value: var6}});
                            var10 = 'Invalid image type, only PNG is supported.';
                            var11 = var5;
                            var4 = new var11[var6](var10, var9);
                            var4 = var4 instanceof Object ? var4 : var5;
                            throw var4;
 156: // try_end1
                            return var3;
 159: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 17;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.showGuildSettingsStickerError;
                            var3 = var3.bind(var4)();
 194:
                            return var2;
 197:
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
            var26 = var2.bind(var4)();
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 517; continue _fun0005 }
 10:
                            var2 = undefined;
                            var10 = undefined;
 14: // try_start_0
                            var3 = _closure2_slot0;
                            var9 = null;
                            if(!(var9 != var3)) { _fun0005_ip = 226; continue _fun0005 }
 30:
                            var3 = _closure2_slot6;
                            if(!(var9 != var3)) { _fun0005_ip = 223; continue _fun0005 }
 41:
                            var3 = _closure2_slot12;
                            if(!(var9 != var3)) { _fun0005_ip = 223; continue _fun0005 }
 52:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 18;
                            var3 = var7[var3];
                            var11 = var6.bind(var2)(var3);
                            var8 = var11.updateGuildSticker;
                            var7 = _closure2_slot1;
                            var6 = _closure2_slot0;
                            var3 = {};
                            var12 = _closure2_slot6;
                            var3['name'] = var12;
                            var12 = _closure2_slot12;
                            var12 = var12.id;
                            if(!(var9 == var12)) { _fun0005_ip = 123; continue _fun0005 }
 112:
                            var12 = _closure2_slot12;
                            var12 = var12.name;
                            _fun0005_ip = 132; continue _fun0005;
 123:
                            var13 = _closure2_slot12;
                            var12 = var13.id;
 132:
                            var3['tags'] = var12;
                            var12 = _closure2_slot8;
                            var13 = var9 != var12;
                            var12 = '';
                            if(!var13) { _fun0005_ip = 156; continue _fun0005 }
 152:
                            var12 = _closure2_slot8;
 156:
                            var3['description'] = var12;
                            var3 = var8.bind(var11)(var7, var6, var3);
                            SaveGenerator(address=171);
 169:
                            return var3;
 171:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 220; continue _fun0005 }
 177:
                            var6 = _closure2_slot2;
                            var6 = var6.bind(var2)();
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 17;
                            var4 = var7[var4];
                            var6 = var6.bind(var2)(var4);
                            var4 = var6.showGuildSettingsStickerSuccess;
                            var4 = var4.bind(var6)();
                            _fun0005_ip = 471; continue _fun0005;
 220: // try_end0
                            return var3;
 223:
                            return var2;
 226: // try_start_1
                            var3 = _closure2_slot6;
                            if(!(var9 != var3)) { _fun0005_ip = 476; continue _fun0005 }
 237:
                            var3 = _closure2_slot12;
                            if(!(var9 != var3)) { _fun0005_ip = 476; continue _fun0005 }
 248:
                            var3 = _closure2_slot10;
                            if(!(var9 != var3)) { _fun0005_ip = 476; continue _fun0005 }
 259:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 18;
                            var3 = var7[var3];
                            var7 = var6.bind(var2)(var3);
                            var6 = var7.createGuildSticker;
                            var3 = {};
                            var8 = _closure2_slot1;
                            var3['guildId'] = var8;
                            var8 = _closure2_slot6;
                            var3['name'] = var8;
                            var8 = _closure2_slot12;
                            var11 = var9 == var8;
                            var8 = undefined;
                            if(var11) { _fun0005_ip = 328; continue _fun0005 }
 319:
                            var11 = _closure2_slot12;
                            var8 = var11.id;
 328:
                            var10 = var8;
                            if(!(var9 == var8)) { _fun0005_ip = 359; continue _fun0005 }
 335:
                            var8 = _closure2_slot12;
                            var11 = var9 == var8;
                            var8 = undefined;
                            if(var11) { _fun0005_ip = 357; continue _fun0005 }
 348:
                            var11 = _closure2_slot12;
                            var8 = var11.name;
 357:
                            _fun0005_ip = 362; continue _fun0005;
 359:
                            var8 = var10;
 362:
                            var3['tags'] = var8;
                            var8 = _closure2_slot8;
                            var9 = var9 != var8;
                            var8 = '';
                            if(!var9) { _fun0005_ip = 386; continue _fun0005 }
 382:
                            var8 = _closure2_slot8;
 386:
                            var3['description'] = var8;
                            var8 = _closure2_slot10;
                            var3['uri'] = var8;
                            var8 = 'image/png';
                            var3['mimeType'] = var8;
                            var8 = 'mobile';
                            var3['platform'] = var8;
                            var3 = var6.bind(var7)(var3);
                            SaveGenerator(address=427);
 425:
                            return var3;
 427:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                            if(var6) { _fun0005_ip = 473; continue _fun0005 }
 433:
                            var5 = _closure2_slot2;
                            var5 = var5.bind(var2)();
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 17;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.showGuildSettingsStickerSuccess;
                            var4 = var4.bind(var5)();
 471: // try_end1
                            _fun0005_ip = 514; continue _fun0005;
 473:
                            return var3;
 476:
                            return var2;
 479: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=2);
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 17;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.showGuildSettingsStickerError;
                            var3 = var3.bind(var4)();
 514:
                            return var2;
 517:
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
            var16 = var2.bind(var4)();
            var9 = _closure1_slot5;
            var11 = var9.useImperativeHandle;
            var3 = arg2;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot16;
                var1['hasUnsavedChanges'] = var2;
                return var1;
            };
            var2 = var11.bind(var9)(var3, var2);
            var3 = var9.useEffect;
            var2 = new Array(3);
            var2[0] = var19;
            var2[1] = var36;
            var2[2] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0006_ip = 24; continue _fun0006 }
 16:
                    var3 = _closure2_slot14;
                    var2 = var1 != var3;
 24:
                    if(!var2) { _fun0006_ip = 161; continue _fun0006 }
 30:
                    var3 = _closure2_slot13;
                    var2 = _closure2_slot15;
                    var5 = undefined;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure2_slot7;
                    var2 = _closure2_slot14;
                    var2 = var2.name;
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot14;
                    var2 = var2.description;
                    var2 = var3.bind(var5)(var2);
                    var2 = _closure2_slot4;
                    var5 = var2.current;
                    if(!(var1 != var5)) { _fun0006_ip = 114; continue _fun0006 }
 94:
                    var3 = var5.setText;
                    var2 = _closure2_slot14;
                    var2 = var2.name;
                    var2 = var3.bind(var5)(var2);
 114:
                    var2 = _closure2_slot5;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0006_ip = 161; continue _fun0006 }
 127:
                    var2 = var3.setText;
                    var4 = _closure2_slot14;
                    var4 = var4.description;
                    var5 = var1 != var4;
                    var1 = '';
                    if(!var5) { _fun0006_ip = 156; continue _fun0006 }
 153:
                    var1 = var4;
 156:
                    var1 = var2.bind(var3)(var1);
 161:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot7;
            var1 = {};
            var1['ref'] = var5;
            var5 = var18.container;
            var1['style'] = var5;
            var5 = 'always';
            var1['keyboardShouldPersistTaps'] = var5;
            var5 = {};
            var35 = 11;
            var9 = var7[var35];
            var9 = var8.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var5['paddingHorizontal'] = var9;
            var7 = var7[var35];
            var7 = var8.bind(var4)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_16;
            var6 = var6.bottom;
            var6 = var7 + var6;
            var5['paddingBottom'] = var6;
            var1['contentContainerStyle'] = var5;
            var5 = var28 == var19;
            var6 = null;
            if(!var5) { _fun0001_ip = 1216; continue _fun0001 }
 670:
            var8 = _closure1_slot17;
            var7 = _closure1_slot16;
            var5 = {};
            var15 = _closure1_slot15;
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var11 = 19;
            var9 = var32[var11];
            var9 = var31.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {};
            var25 = 'heading-md/semibold';
            var9['variant'] = var25;
            var25 = var18.title;
            var9['style'] = var25;
            var25 = 20;
            var27 = var32[var25];
            var27 = var31.bind(var4)(var27);
            var33 = var27.intl;
            var30 = var33.string;
            var27 = var32[var25];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.9N2OWF;
            var27 = var30.bind(var33)(var27);
            var9['children'] = var27;
            var12 = var15.bind(var4)(var12, var9);
            var9 = new Array(4);
            var9[0] = var12;
            var12 = var32[var11];
            var12 = var31.bind(var4)(var12);
            var27 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var30 = var18.description;
            var12['style'] = var30;
            var30 = var32[var25];
            var30 = var31.bind(var4)(var30);
            var38 = var30.intl;
            var37 = var38.format;
            var30 = var32[var25];
            var30 = var31.bind(var4)(var30);
            var30 = var30.t;
            var33 = var30.hxLvi4;
            var30 = {};
            var39 = 21;
            var39 = var32[var39];
            var42 = var31.bind(var4)(var39);
            var41 = var42.formatKbSize;
            var40 = _closure1_slot14;
            var39 = {};
            var39['useKibibytes'] = var22;
            var39 = var41.bind(var42)(var40, var39);
            var30['fileSize'] = var39;
            var30 = var37.bind(var38)(var33, var30);
            var12['children'] = var30;
            var12 = var15.bind(var4)(var27, var12);
            var9[1] = var12;
            var11 = var32[var11];
            var11 = var31.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            var27 = var18.help;
            var11['style'] = var27;
            var27 = var32[var25];
            var27 = var31.bind(var4)(var27);
            var37 = var27.intl;
            var33 = var37.format;
            var27 = var32[var25];
            var27 = var31.bind(var4)(var27);
            var27 = var27.t;
            var30 = var27.UBj0aW;
            var27 = {};
            var39 = _closure1_slot1;
            var38 = 22;
            var38 = var32[var38];
            var40 = var39.bind(var4)(var38);
            var39 = var40.getArticleURL;
            var38 = _closure1_slot10;
            var38 = var38.STICKERS_UPLOAD;
            var38 = var39.bind(var40)(var38);
            var27['articleUrl'] = var38;
            var27 = var33.bind(var37)(var30, var27);
            var11['children'] = var27;
            var11 = var15.bind(var4)(var12, var11);
            var9[2] = var11;
            var11 = 23;
            var11 = var32[var11];
            var11 = var31.bind(var4)(var11);
            var12 = var11.Button;
            var11 = {};
            var27 = var32[var25];
            var27 = var31.bind(var4)(var27);
            var30 = var27.intl;
            var27 = var30.string;
            var25 = var32[var25];
            var25 = var31.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.O1REe3;
            var25 = var27.bind(var30)(var25);
            var11['text'] = var25;
            var11['onPress'] = var26;
            var25 = var28 != var19;
            var11['disabled'] = var25;
            var25 = var28 == var19;
            var27 = 'secondary';
            var19 = var27;
            if(!var25) { _fun0001_ip = 1192; continue _fun0001 }
 1178:
            var25 = var28 == var34;
            var19 = var27;
            if(!var25) { _fun0001_ip = 1192; continue _fun0001 }
 1188:
            var19 = 'primary';
 1192:
            var11['variant'] = var19;
            var11 = var15.bind(var4)(var12, var11);
            var9[3] = var11;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 1216:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot17;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 24;
            var6 = var11[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Stack;
            var6 = {};
            var9 = var18.stack;
            var6['style'] = var9;
            var15 = _closure1_slot15;
            var30 = 19;
            var9 = var11[var30];
            var9 = var12.bind(var4)(var9);
            var25 = var9.Text;
            var9 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            var19 = var18.stickerPreviewLabel;
            var9['style'] = var19;
            var19 = 20;
            var27 = var11[var19];
            var27 = var12.bind(var4)(var27);
            var32 = var27.intl;
            var31 = var32.string;
            var27 = var11[var19];
            var27 = var12.bind(var4)(var27);
            var27 = var27.t;
            var27 = var27.gjdiKC;
            var27 = var31.bind(var32)(var27);
            var9['children'] = var27;
            var25 = var15.bind(var4)(var25, var9);
            var9 = new Array(7);
            var9[0] = var25;
            var25 = 25;
            var11 = var11[var25];
            var11 = var12.bind(var4)(var11);
            var12 = var11.PressableHighlight;
            var11 = {};
            var27 = var18.stickerPreview;
            var11['style'] = var27;
            var27 = var28 != var36;
            var11['disabled'] = var27;
            var11['onPress'] = var26;
            if(!(var28 == var36)) { _fun0001_ip = 1523; continue _fun0001 }
 1424:
            if(!(var28 == var34)) { _fun0001_ip = 1476; continue _fun0001 }
 1428:
            var31 = _closure1_slot15;
            var27 = _closure1_slot0;
            var32 = _closure1_slot2;
            var26 = 27;
            var26 = var32[var26];
            var26 = var27.bind(var4)(var26);
            var27 = var26.StickerPlusIcon;
            var26 = {};
            var32 = 'lg';
            var26['size'] = var32;
            var26 = var31.bind(var4)(var27, var26);
            _fun0001_ip = 1521; continue _fun0001;
 1476:
            var32 = _closure1_slot15;
            var31 = _closure1_slot6;
            var27 = {};
            var33 = {};
            var33['uri'] = var34;
            var27['source'] = var33;
            var33 = var18.stickerPreviewImage;
            var27['style'] = var33;
            var33 = 'contain';
            var27['resizeMode'] = var33;
            var26 = var32.bind(var4)(var31, var27);
 1521:
            _fun0001_ip = 1589; continue _fun0001;
 1523:
            var32 = _closure1_slot15;
            var34 = _closure1_slot1;
            var33 = _closure1_slot2;
            var27 = 26;
            var27 = var33[var27];
            var31 = var34.bind(var4)(var27);
            var27 = {};
            var27['sticker'] = var36;
            var33 = var33[var35];
            var33 = var34.bind(var4)(var33);
            var33 = var33.spacing;
            var33 = var33.PX_96;
            var27['size'] = var33;
            var27['animated'] = var22;
            var26 = var32.bind(var4)(var31, var27);
 1589:
            var11['children'] = var26;
            var11 = var15.bind(var4)(var12, var11);
            var9[1] = var11;
            var27 = _closure1_slot15;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = var11[var30];
            var15 = var12.bind(var4)(var15);
            var26 = var15.Text;
            var15 = {'variant': 'text-sm/semibold', 'color': 'text-secondary'};
            var31 = var18.stickerPreviewLabel;
            var15['style'] = var31;
            var31 = var11[var19];
            var31 = var12.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var11[var19];
            var31 = var12.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.3BQmiI;
            var31 = var32.bind(var33)(var31);
            var15['children'] = var31;
            var15 = var27.bind(var4)(var26, var15);
            var9[2] = var15;
            var15 = _closure1_slot17;
            var11 = var11[var25];
            var11 = var12.bind(var4)(var11);
            var12 = var11.PressableHighlight;
            var11 = {};
            var18 = var18.emojiPreview;
            var11['style'] = var18;
            var18 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEmojiPickerActionSheet;
                var2 = {};
                var5 = _closure1_slot13;
                var5 = var5.GUILD_STICKER_RELATED_EMOJI;
                var2['pickerIntention'] = var5;
                var6 = _closure2_slot1;
                var2['guildId'] = var6;
                var5 = _closure2_slot13;
                var2['onPressEmoji'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var11['onPress'] = var18;
            if(!(var28 == var29)) { _fun0001_ip = 1814; continue _fun0001 }
 1759:
            var26 = _closure1_slot15;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var18 = 31;
            var18 = var27[var18];
            var18 = var25.bind(var4)(var18);
            var25 = var18.ReactionIcon;
            var18 = {'size': 'md', 'color': 'text-secondary'};
            var25 = var26.bind(var4)(var25, var18);
            _fun0001_ip = 1970; continue _fun0001;
 1814:
            var27 = _closure1_slot15;
            var26 = _closure1_slot1;
            var31 = _closure1_slot2;
            var18 = 29;
            var18 = var31[var18];
            var26 = var26.bind(var4)(var18);
            var18 = {};
            var31 = {'width': 24, 'height': 24};
            var18['fastImageStyle'] = var31;
            var31 = var29.id;
            if(!(var28 != var31)) { _fun0001_ip = 1875; continue _fun0001 }
 1868:
            var31 = var29.name;
            _fun0001_ip = 1880; continue _fun0001;
 1875:
            var31 = var29.surrogates;
 1880:
            var18['name'] = var31;
            var31 = var29.id;
            var32 = var28 != var31;
            var31 = undefined;
            if(!var32) { _fun0001_ip = 1959; continue _fun0001 }
 1898:
            var33 = _closure1_slot1;
            var34 = _closure1_slot2;
            var32 = 30;
            var32 = var34[var32];
            var34 = var33.bind(var4)(var32);
            var33 = var34.getEmojiURL;
            var32 = {};
            var35 = var29.id;
            var32['id'] = var35;
            var35 = var29.animated;
            var32['animated'] = var35;
            var35 = _closure1_slot12;
            var32['size'] = var35;
            var31 = var33.bind(var34)(var32);
 1959:
            var18['src'] = var31;
            var25 = var27.bind(var4)(var26, var18);
 1970:
            var18 = new Array(2);
            var18[0] = var25;
            var27 = _closure1_slot15;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var25 = var25[var30];
            var25 = var26.bind(var4)(var25);
            var26 = var25.Text;
            var25 = {'variant': 'text-md/semibold', 'color': 'input-placeholder-text'};
            if(!(var28 == var29)) { _fun0001_ip = 2078; continue _fun0001 }
 2022:
            var32 = _closure1_slot0;
            var28 = _closure1_slot2;
            var30 = var28[var19];
            var30 = var32.bind(var4)(var30);
            var31 = var30.intl;
            var30 = var31.string;
            var28 = var28[var19];
            var28 = var32.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.QTK0TE;
            var28 = var30.bind(var31)(var28);
            _fun0001_ip = 2106; continue _fun0001;
 2078:
            var31 = var29.name;
            var29 = global;
            var29 = var29.HermesInternal;
            var30 = var29.concat;
            var29 = ':';
            var28 = var30.bind(var29)(var31, var29);
 2106:
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var18[1] = var25;
            var11['children'] = var18;
            var11 = var15.bind(var4)(var12, var11);
            var9[3] = var11;
            var12 = _closure1_slot15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 32;
            var10 = var15[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.TextInput;
            var10 = {};
            var10['ref'] = var24;
            var24 = var15[var19];
            var24 = var18.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var15[var19];
            var24 = var18.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.0VRh6u;
            var24 = var25.bind(var26)(var24);
            var10['label'] = var24;
            var24 = var15[var19];
            var24 = var18.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var15[var19];
            var24 = var18.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.3fGttb;
            var24 = var25.bind(var26)(var24);
            var10['placeholder'] = var24;
            var10['onChange'] = var23;
            var10['onFocus'] = var17;
            var13 = function onSubmitEditing() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot5;
                    var4 = var1.current;
                    var1 = null;
                    if(!(var1 != var4)) { _fun0007_ip = 28; continue _fun0007 }
 18:
                    var3 = var4.focus;
                    var3 = var3.bind(var4)();
 28:
                    var2 = _closure2_slot3;
                    var3 = var2.current;
                    if(!(var1 != var3)) { _fun0007_ip = 61; continue _fun0007 }
 41:
                    var2 = var3.scrollToEnd;
                    var1 = {};
                    var4 = true;
                    var1['animated'] = var4;
                    var1 = var2.bind(var3)(var1);
 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var10['onSubmitEditing'] = var13;
            var13 = false;
            var10['isDisabled'] = var13;
            var10['isClearable'] = var22;
            var22 = 'next';
            var10['returnKeyType'] = var22;
            var22 = 'submit';
            var10['submitBehavior'] = var22;
            var10 = var12.bind(var4)(var11, var10);
            var9[4] = var10;
            var10 = 33;
            var10 = var15[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.TextArea;
            var10 = {};
            var10['ref'] = var21;
            var21 = 100;
            var10['maxLength'] = var21;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.uGccen;
            var21 = var22.bind(var23)(var21);
            var10['label'] = var21;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.zwR0fX;
            var21 = var22.bind(var23)(var21);
            var10['placeholder'] = var21;
            var10['onChange'] = var20;
            var10['onFocus'] = var17;
            var10 = var12.bind(var4)(var11, var10);
            var9[5] = var10;
            var10 = 23;
            var10 = var15[var10];
            var10 = var18.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var10['onPress'] = var16;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.R3BPHx;
            var15 = var16.bind(var17)(var15);
            var10['text'] = var15;
            var16 = var14.bind(var4)(var13);
            var15 = 'secondary';
            if(!var16) { _fun0001_ip = 2574; continue _fun0001 }
 2570:
            var15 = 'primary';
 2574:
            var10['variant'] = var15;
            var14 = var14.bind(var4)(var13);
            var14 = !var14;
            var10['disabled'] = var14;
            var10['loading'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[6] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/GuildSettingsModalStickers/GuildSettingsStickerCreate.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();