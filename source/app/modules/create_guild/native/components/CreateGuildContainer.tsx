// app/modules/create_guild/native/components/CreateGuildContainer.tsx
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UPLOAD_MEDIUM_SIZE;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {};
    var10 = 8;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var4['contentContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/create_guild/native/components/CreateGuildContainer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function CreateGuildContainer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var23 = var5.onCreate;
            var _closure2_slot0 = var23;
            var24 = var5.guildTemplate;
            var _closure2_slot1 = var24;
            var8 = var5.autoFocus;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var22 = var5.onHubGuildInfoSet;
            var _closure2_slot2 = var22;
            var21 = var5.isCommunityIntent;
            var _closure2_slot3 = var21;
            var3 = {'onCreate': 0, 'guildTemplate': 0, 'autoFocus': 0, 'onHubGuildInfoSet': 0, 'isCommunityIntent': 0};
            var14 = null;
            var28 = var3;
            var27 = null;
            var1 = silentSetPrototypeOf(var28, var27);
            var7 = 0;
            var28 = {};
            var27 = var5;
            var26 = var3;
            var15 = copyDataProperties(var28, var27, var26);
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var3 = _closure1_slot10;
            var19 = var3.bind(var4)();
            var20 = _closure1_slot5;
            var9 = var20.useState;
            var6 = _closure1_slot1;
            var18 = _closure1_slot2;
            var3 = 9;
            var3 = var18[var3];
            var11 = var6.bind(var4)(var3);
            var10 = var11.getGuildNameSuggestion;
            var3 = {};
            var5 = true;
            var3['truncateUsername'] = var5;
            var3 = var10.bind(var11)(var3);
            var3 = var9.bind(var20)(var3);
            var12 = _closure1_slot4;
            var10 = 2;
            var3 = var12.bind(var4)(var3, var10);
            var17 = var3[var7];
            _closure2_slot4 = var17;
            var9 = 1;
            var11 = var3[var9];
            var3 = var20.useState;
            var3 = var3.bind(var20)(var14);
            var3 = var12.bind(var4)(var3, var10);
            var16 = var3[var7];
            _closure2_slot5 = var16;
            var3 = var3[var9];
            _closure2_slot6 = var3;
            var13 = var20.useState;
            var3 = false;
            var3 = var13.bind(var20)(var3);
            var3 = var12.bind(var4)(var3, var10);
            var13 = var3[var7];
            var3 = var3[var9];
            _closure2_slot7 = var3;
            var3 = var20.useState;
            var3 = var3.bind(var20)(var14);
            var3 = var12.bind(var4)(var3, var10);
            var14 = var3[var7];
            var3 = var3[var9];
            _closure2_slot8 = var3;
            var25 = var20.useState;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot7;
                    var1 = var2.getCurrentUser;
                    var4 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var4;
                    var2 = undefined;
                    if(var3) { _fun0002_ip = 3; continue _fun0002 }
case 4:
                    var3 = var4.isStaff;
                    var2 = var3.bind(var4)();
case 3:
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var1 = var2;
case 5:
                    return var1;
                }
            };
            var3 = var25.bind(var20)(var3);
            var3 = var12.bind(var4)(var3, var10);
            var7 = var3[var7];
            _closure2_slot9 = var7;
            var10 = var3[var9];
            var25 = var20.useCallback;
            var3 = _closure1_slot3;
            var9 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 10;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.openImagePicker;
                        var2 = {};
                        var6 = _closure1_slot8;
                        var2['size'] = var6;
                        var2 = var4.bind(var5)(var2);
                        SaveGenerator(address=57);
case 9:
                        return var2;
case 10:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var5 = var2.base64;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var4 = _closure2_slot6;
                        var4 = var4.bind(var3)(var5);
case 13:
                        return var3;
case 11:
                        return var2;
case 7:
                        return var1;
                    }
                };
                return var1;
            };
            var12 = var3.bind(var4)(var9);
            var9 = new Array(0);
            var12 = var25.bind(var20)(var12, var9);
            var9 = var20.useCallback;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                        var2 = undefined;
                        var6 = undefined;
                        var7 = undefined;
                        var10 = undefined;
                        var5 = _closure2_slot7;
                        var4 = true;
                        var4 = var5.bind(var2)(var4);
case 17: // try_start_0
                        var4 = _closure2_slot2;
                        var8 = null;
                        if(!(var8 == var4)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                        var5 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 11;
                        var4 = var11[var4];
                        var15 = var5.bind(var2)(var4);
                        var14 = var15.createGuildFromTemplate;
                        var20 = _closure2_slot4;
                        var19 = _closure2_slot5;
                        var18 = _closure2_slot1;
                        var17 = _closure2_slot3;
                        var16 = _closure2_slot9;
                        var21 = var15;
                        var4 = var21[var14](var20, var19, var18, var17, var16, var15);
                        SaveGenerator(address=105);
case 20:
                        return var4;
case 21:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                        var6 = var4;
                        var12 = var4.id;
                        var7 = var12;
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var5 = 12;
                        var5 = var13[var5];
                        var11 = var11.bind(var2)(var5);
                        var5 = var11.waitForGuild;
                        var5 = var5.bind(var11)(var12);
                        SaveGenerator(address=160);
case 24:
                        return var5;
case 25:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                        if(var11) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                        var12 = _closure1_slot6;
                        var11 = var12.getDefaultChannel;
                        var11 = var11.bind(var12)(var7);
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var12 = 13;
                        var12 = var9[var12];
                        var13 = var7.bind(var2)(var12);
                        var12 = var13.dangerouslyConstructGuildRecordFromUntypedObject;
                        var12 = var12.bind(var13)(var6);
                        var10 = var12;
                        var6 = 14;
                        var6 = var9[var6];
                        var9 = var7.bind(var2)(var6);
                        var7 = var9.loadInviteSuggestions;
                        var6 = {};
                        var13 = global;
                        var13 = var13.Set;
                        var14 = var13.prototype;
                        var14 = Object.create(var14, {constructor: {value: var13}});
                        var21 = var14;
                        var13 = new var21[var13](var20);
                        var13 = var13 instanceof Object ? var13 : var14;
                        var6['omitUserIds'] = var13;
                        var6['guild'] = var12;
                        var6['channel'] = var11;
                        var6 = var7.bind(var9)(var6);
                        SaveGenerator(address=288);
case 28:
                        return var6;
case 29:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                        var7 = _closure2_slot0;
                        var8 = var8 == var7;
                        var7 = undefined;
                        if(var8) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                        var9 = _closure2_slot0;
                        var8 = {};
                        var8['guild'] = var10;
                        var7 = var9.bind(var2)(var8);
case 32:
                        SaveGenerator(address=326);
case 34:
                        return var7;
case 35:
                        ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                        if(!var8) { _fun0004_ip = 36; continue _fun0004 }
case 37: // try_end0
                        return var7;
case 30:
                        return var6;
case 26:
                        return var5;
case 22:
                        return var4;
case 18: // try_start_1
                        var7 = _closure2_slot2;
                        var6 = _closure2_slot4;
                        var5 = _closure2_slot5;
                        var4 = _closure2_slot1;
                        var4 = var7.bind(var2)(var6, var5, var4);
case 36: // try_end1
                        _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=4);
                        var4 = _closure2_slot8;
                        var4 = var4.bind(var2)(var5);
case 38:
                        var4 = _closure2_slot7;
                        var3 = false;
                        var3 = var4.bind(var2)(var3);
                        return var2;
case 15:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = new Array(7);
            var2[0] = var24;
            var2[1] = var16;
            var2[2] = var17;
            var2[3] = var23;
            var2[4] = var22;
            var2[5] = var7;
            var2[6] = var21;
            var9 = var9.bind(var20)(var3, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot0;
            var1 = 15;
            var1 = var18[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.SafeAreaPaddingView;
            var1 = {};
            var1['top'] = var5;
            var20 = var19.flex;
            var5 = new Array(2);
            var5[0] = var20;
            var19 = var19.contentContainer;
            var5[1] = var19;
            var1['style'] = var5;
            var5 = 16;
            var5 = var18[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var28 = var5;
            var27 = var15;
            var15 = copyDataProperties(var28, var27);
            var15 = {};
            var15['name'] = var17;
            var15['icon'] = var16;
            var15['staffOnly'] = var7;
            var7 = 'guild';
            var5[var7] = var15;
            var7 = 'error';
            var5[var7] = var14;
            var7 = 'submitting';
            var5[var7] = var13;
            var7 = 'onIconPress';
            var5[var7] = var12;
            var7 = 'onNameChange';
            var5[var7] = var11;
            var7 = 'onStaffOnlyChange';
            var5[var7] = var10;
            var7 = 'onCreate';
            var5[var7] = var9;
            var7 = 'autoFocus';
            var5[var7] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();