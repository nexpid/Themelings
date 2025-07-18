// app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.Keyboard;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.DirectoryEntryCategories;
    var _closure1_slot9 = var7;
    var4 = var4.getHubCategories;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginHorizontal': 16, 'gap': 24};
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/native/components/GuildDirectoryEditDescriptionTemplate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.onSubmit;
            var _closure2_slot0 = var1;
            var9 = var2.buttonLabel;
            var1 = var2.entry;
            var3 = var2.directoryChannelId;
            var _closure2_slot1 = var3;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var2 = _closure1_slot13;
            var5 = var2.bind(var4)();
            var2 = _closure1_slot10;
            var20 = var2.bind(var4)(var3);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var7 = var3.bind(var4)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getCurrentCategoryId;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var6.bind(var7)(var3, var2);
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var8 = null;
            var10 = var8 == var1;
            var7 = undefined;
            if(var10) { _fun0001_ip = 153; continue _fun0001 }
 147:
            var7 = var1.primaryCategoryId;
 153:
            if(!(var8 != var7)) { _fun0001_ip = 160; continue _fun0001 }
 157:
            var2 = var7;
 160:
            var3 = var3.bind(var6)(var2);
            var2 = _closure1_slot4;
            var6 = 2;
            var3 = var2.bind(var4)(var3, var6);
            var15 = 0;
            var14 = var3[var15];
            _closure2_slot2 = var14;
            var2 = 1;
            var3 = var3[var2];
            _closure2_slot3 = var3;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var11 = var8 == var1;
            var10 = undefined;
            if(var11) { _fun0001_ip = 222; continue _fun0001 }
 217:
            var10 = var1.description;
 222:
            var11 = var8 != var10;
            var1 = '';
            if(!var11) { _fun0001_ip = 236; continue _fun0001 }
 233:
            var1 = var10;
 236:
            var1 = var3.bind(var7)(var1);
            var3 = _closure1_slot4;
            var1 = var3.bind(var4)(var1, var6);
            var12 = var1[var15];
            _closure2_slot4 = var12;
            var21 = var1[var2];
            var7 = _closure1_slot5;
            var10 = var7.useState;
            var1 = false;
            var1 = var10.bind(var7)(var1);
            var1 = var3.bind(var4)(var1, var6);
            var10 = var1[var15];
            var1 = var1[var2];
            _closure2_slot5 = var1;
            var1 = var7.useState;
            var1 = var1.bind(var7)(var8);
            var1 = var3.bind(var4)(var1, var6);
            var17 = var1[var15];
            var1 = var1[var2];
            _closure2_slot6 = var1;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 156; continue _fun0002 }
 10:
                            var4 = _closure2_slot5;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
 26: // try_start_0 // try_start_1
                            var6 = _closure2_slot0;
                            var4 = _closure2_slot4;
                            var2 = _closure2_slot2;
                            var2 = var6.bind(var5)(var4, var2);
                            SaveGenerator(address=48);
 46:
                            return var2;
 48:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 56; continue _fun0002 }
 54: // try_end0
                            _fun0002_ip = 127; continue _fun0002;
 56: // try_end1
                            var6 = _closure2_slot5;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
 70: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register=6);
                            var4 = _closure2_slot6;
                            var6 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var2 = 9;
                            var2 = var8[var2];
                            var2 = var6.bind(var5)(var2);
                            var6 = var2.prototype;
                            var6 = Object.create(var6, {constructor: {value: var2}});
                            var11 = var6;
                            var10 = var7;
                            var2 = new var11[var2](var10, var9);
                            var2 = var2 instanceof Object ? var2 : var6;
                            var2 = var4.bind(var5)(var2);
 127: // try_end2
                            var4 = _closure2_slot5;
                            var2 = false;
                            var2 = var4.bind(var5)(var2);
                            return var5;
 141: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot5;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 156:
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
            var11 = var1.bind(var4)();
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var7 = _closure1_slot11;
            var23 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 10;
            var5 = var16[var5];
            var5 = var23.bind(var4)(var5);
            var6 = var5.TextArea;
            var5 = {};
            var19 = 11;
            var22 = var16[var19];
            var22 = var23.bind(var4)(var22);
            var25 = var22.intl;
            var24 = var25.string;
            var22 = var16[var19];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.FFFAGh;
            var22 = var24.bind(var25)(var22);
            var5['label'] = var22;
            var22 = var16[var19];
            var22 = var23.bind(var4)(var22);
            var25 = var22.intl;
            var24 = var25.string;
            var22 = var16[var19];
            var22 = var23.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22./zbXqq;
            var22 = var24.bind(var25)(var22);
            var5['description'] = var22;
            var5['value'] = var12;
            var5['onChange'] = var21;
            var21 = var16[var19];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var16 = var16[var19];
            var16 = var23.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.VzuITE;
            var16 = var21.bind(var22)(var16);
            var5['placeholder'] = var16;
            var16 = 200;
            var5['maxLength'] = var16;
            var21 = var8 != var17;
            var16 = 'default';
            if(!var21) { _fun0001_ip = 571; continue _fun0001 }
 567:
            var16 = 'error';
 571:
            var5['status'] = var16;
            var16 = var8 == var17;
            var8 = undefined;
            if(var16) { _fun0001_ip = 594; continue _fun0001 }
 584:
            var16 = var17.getAnyErrorMessage;
            var8 = var16.bind(var17)();
 594:
            var5['errorMessage'] = var8;
            var8 = 'blurAndSubmit';
            var5['submitBehavior'] = var8;
            var8 = 'done';
            var5['returnKeyType'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot0;
            var16 = _closure1_slot2;
            var6 = 12;
            var6 = var16[var6];
            var6 = var7.bind(var4)(var6);
            var17 = var6.TableRadioGroup;
            var6 = {};
            var21 = var16[var19];
            var21 = var7.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var16[var19];
            var19 = var7.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.Olo8FB;
            var19 = var21.bind(var22)(var19);
            var6['title'] = var19;
            var6['defaultValue'] = var14;
            var19 = function onChange(arg1) {
                var2 = _closure1_slot7;
                var1 = var2.dismiss;
                var1 = var1.bind(var2)();
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onChange'] = var19;
            var19 = var20.map;
            var18 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.TableRadioRow;
                var2 = {};
                var6 = var1.label;
                var2['label'] = var6;
                var6 = var1.value;
                var2['value'] = var6;
                var1 = var1.value;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var18 = var19.bind(var20)(var18);
            var6['children'] = var18;
            var6 = var8.bind(var4)(var17, var6);
            var5[1] = var6;
            var6 = 14;
            var6 = var16[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Button;
            var6 = {};
            var12 = var12.length;
            var12 = var15 === var12;
            if(var12) { _fun0001_ip = 805; continue _fun0001 }
 791:
            var13 = _closure1_slot9;
            var13 = var13.ALL;
            var12 = var14 === var13;
 805:
            var6['disabled'] = var12;
            var6['onPress'] = var11;
            var6['loading'] = var10;
            var6['text'] = var9;
            var9 = 'lg';
            var6['size'] = var9;
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