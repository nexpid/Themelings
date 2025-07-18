// app/components_native/common/IconUploader.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Image;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'absolute', 'right': 4294967289, 'top': 4294967289};
    var4['uploadIcon'] = var9;
    var9 = {'height': 64, 'width': 64, 'borderRadius': 32};
    var4['avatar'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/IconUploader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function IconUploader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = var6.disabled;
            var5 = undefined;
            if(!(var2 === var5)) { _fun0001_ip = 18; continue _fun0001 }
 16:
            var2 = false;
 18:
            var8 = var6.makeURL;
            if(!(var8 === var5)) { _fun0001_ip = 35; continue _fun0001 }
 28:
            var8 = function o() {
                var1 = undefined;
                return var1;
            };
 35:
            var4 = var6.type;
            if(!(var4 === var5)) { _fun0001_ip = 48; continue _fun0001 }
 44:
            var4 = 'avatar';
 48:
            var12 = var6.name;
            var1 = var6.icon;
            var7 = var6.onUpload;
            var _closure2_slot0 = var7;
            var7 = var6.style;
            var15 = var6.iconStyle;
            var6 = var6.onChangeIconPress;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var5;
            var11 = _closure1_slot4;
            var10 = var11.useRef;
            var9 = false;
            var9 = var10.bind(var11)(var9);
            _closure2_slot2 = var9;
            var10 = null;
            if(!(var10 != var1)) { _fun0001_ip = 154; continue _fun0001 }
 124:
            var11 = /^data:/;
            var9 = var11.test;
            var9 = var9.bind(var11)(var1);
            var14 = var1;
            if(var9) { _fun0001_ip = 159; continue _fun0001 }
 154:
            var14 = var8.bind(var5)(var1);
 159:
            var3 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 162; continue _fun0002 }
 10:
                            var2 = _closure2_slot1;
                            var7 = null;
                            if(!(var7 != var2)) { _fun0002_ip = 33; continue _fun0002 }
 23:
                            var4 = _closure2_slot1;
                            var2 = undefined;
                            var2 = var4.bind(var2)();
 33:
                            var2 = _closure2_slot2;
                            var2 = var2.current;
                            if(var2) { _fun0002_ip = 157; continue _fun0002 }
 45:
                            var4 = _closure2_slot2;
                            var2 = true;
                            var4['current'] = var2;
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 5;
                            var2 = var5[var2];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var2);
                            var4 = var5.openImagePicker;
                            var2 = {};
                            var8 = _closure1_slot7;
                            var2['size'] = var8;
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=107);
 105:
                            return var2;
 107:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 154; continue _fun0002 }
 113:
                            var5 = var2.base64;
                            if(!(var7 != var5)) { _fun0002_ip = 140; continue _fun0002 }
 123:
                            var4 = _closure2_slot0;
                            if(!(var7 != var4)) { _fun0002_ip = 140; continue _fun0002 }
 131:
                            var4 = _closure2_slot0;
                            var4 = var4.bind(var6)(var5);
 140:
                            var4 = _closure2_slot2;
                            var3 = false;
                            var4['current'] = var3;
                            _fun0002_ip = 157; continue _fun0002;
 154:
                            return var2;
 157:
                            var2 = undefined;
                            return var2;
 162:
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
            var9 = var3.bind(var5)();
            var3 = 'guild';
            if(!(var3 !== var4)) { _fun0001_ip = 257; continue _fun0001 }
 178:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 7;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.makeSource;
            var11 = var3.bind(var4)(var14);
            var8 = _closure1_slot8;
            var4 = _closure1_slot6;
            var3 = {};
            var13 = _closure1_slot11;
            var16 = var13.avatar;
            var13 = new Array(2);
            var13[0] = var16;
            var13[1] = var15;
            var3['style'] = var13;
            var3['source'] = var11;
            var11 = var8.bind(var5)(var4, var3);
            _fun0001_ip = 353; continue _fun0001;
 257:
            var1 = var10 == var1;
            if(!var1) { _fun0001_ip = 268; continue _fun0001 }
 264:
            var1 = var10 == var12;
 268:
            var11 = undefined;
            if(var1) { _fun0001_ip = 353; continue _fun0001 }
 273:
            var4 = _closure1_slot8;
            var3 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 6;
            var1 = var13[var8];
            var3 = var3.bind(var5)(var1);
            var1 = {};
            var1['style'] = var15;
            var1['icon'] = var14;
            var1['value'] = var12;
            var12 = _closure1_slot0;
            var8 = var13[var8];
            var8 = var12.bind(var5)(var8);
            var8 = var8.GuildIconSizes;
            var8 = var8.XLARGE;
            var1['size'] = var8;
            var8 = true;
            var1['animate'] = var8;
            var11 = var4.bind(var5)(var3, var1);
 353:
            var4 = _closure1_slot10;
            var3 = _closure1_slot9;
            var1 = {};
            var8 = new Array(2);
            var8[0] = var11;
            var10 = null;
            if(var2) { _fun0001_ip = 430; continue _fun0001 }
 376:
            var13 = _closure1_slot8;
            var12 = _closure1_slot6;
            var11 = {};
            var14 = _closure1_slot11;
            var14 = var14.uploadIcon;
            var11['style'] = var14;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 8;
            var14 = var16[var14];
            var14 = var15.bind(var5)(var14);
            var11['source'] = var14;
            var10 = var13.bind(var5)(var12, var11);
 430:
            var8[1] = var10;
            var1['children'] = var8;
            var8 = var4.bind(var5)(var3, var1);
            var1 = var8;
            if(var2) { _fun0001_ip = 578; continue _fun0001 }
 453:
            var4 = _closure1_slot8;
            var3 = _closure1_slot5;
            var2 = {};
            var2['style'] = var7;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 9;
            var6 = var14[var6];
            var6 = var13.bind(var5)(var6);
            var7 = var6.PressableOpacity;
            var6 = {};
            var10 = 'button';
            var6['accessibilityRole'] = var10;
            var10 = 10;
            var11 = var14[var10];
            var11 = var13.bind(var5)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var5)(var10);
            var10 = var10.t;
            var10 = var10.MsUY/f;
            var10 = var11.bind(var12)(var10);
            var6['accessibilityLabel'] = var10;
            var6['onPress'] = var9;
            var6['children'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 578:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();