// app/modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function ExperimentOverrideActionSheet(arg1) {
        var2 = arg1;
        var10 = var2.id;
        var _closure2_slot0 = var10;
        var12 = var2.experiment;
        var _closure2_slot1 = var12;
        var11 = var2.override;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var12;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot1;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = new Array(0);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 16;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.getExperimentVariantsForDevTools;
                var2 = _closure2_slot1;
                var1 = var3.bind(var4)(var2);
case 4:
                return var1;
            }
        };
        var2 = var4.bind(var6)(var2, var3);
        var _closure2_slot2 = var2;
        var6 = _closure1_slot3;
        var4 = var6.useMemo;
        var3 = new Array(3);
        var3[0] = var10;
        var3[1] = var12;
        var3[2] = var2;
        var2 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var3)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var7 = var3;
                var2 = new var7[var2](var6);
                var5 = var2 instanceof Object ? var2 : var3;
                var _closure3_slot0 = var5;
                var3 = _closure2_slot2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure3_slot0;
                    var2 = var3.set;
                    var1 = var4.id;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = new Array(0);
                var _closure3_slot1 = var1;
                var3 = var5.forEach;
                var2 = function(arg1) {
                    var5 = arg1;
                    var _closure4_slot0 = var5;
                    var3 = _closure3_slot1;
                    var2 = var3.push;
                    var1 = {};
                    var5 = var5.label;
                    var1['label'] = var5;
                    var4 = function onPress() {
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 17;
                        var3 = var4[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.hideActionSheet;
                        var3 = 'ExperimentOverrideSheet';
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure1_slot0;
                        var2 = 18;
                        var2 = var4[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.overrideBucket;
                        var3 = _closure2_slot1;
                        var4 = var3.system;
                        var3 = _closure2_slot0;
                        var2 = _closure4_slot0;
                        var2 = var2.id;
                        var2 = var5.bind(var6)(var4, var3, var2);
                        return var1;
                    };
                    var1['onPress'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var3.bind(var5)(var2);
                var3 = var1.push;
                var2 = {'label': 'Clear Override', 'isDestructive': true};
                var4 = function onPress() {
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var3 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var3);
                    var5 = var6.hideActionSheet;
                    var3 = 'ExperimentOverrideSheet';
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot0;
                    var2 = 18;
                    var2 = var4[var2];
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.overrideBucket;
                    var3 = _closure2_slot1;
                    var4 = var3.system;
                    var3 = _closure2_slot0;
                    var2 = null;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    return var1;
                };
                var2['onPress'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
case 5:
                var1 = new Array(0);
                return var1;
            }
        };
        var9 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hideActionSheet;
            var2 = 'ExperimentOverrideSheet';
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = new Array(0);
        var8 = var3.bind(var4)(var2, var1);
        var4 = _closure1_slot8;
        var6 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 19;
        var1 = var13[var1];
        var3 = undefined;
        var1 = var6.bind(var3)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var15 = _closure1_slot8;
        var7 = 20;
        var7 = var13[var7];
        var7 = var6.bind(var3)(var7);
        var14 = var7.BottomSheetTitleHeader;
        var7 = {};
        var16 = var12.title;
        var7['title'] = var16;
        var7['subtitle'] = var10;
        var7 = var15.bind(var3)(var14, var7);
        var1['header'] = var7;
        var7 = _closure1_slot8;
        var5 = 21;
        var5 = var13[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.ExperimentDetails;
        var5 = {};
        var5['experiment'] = var12;
        var5['override'] = var11;
        var5['id'] = var10;
        var5['options'] = var9;
        var5['onCopyLink'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var _closure1_slot9 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ExperimentEmbedType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/ExperimentEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function ConnectedExperimentOverrideActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var8 = var2.id;
            var _closure2_slot0 = var8;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 8;
            var6 = var4[var5];
            var5 = undefined;
            var7 = var3.bind(var5)(var6);
            var6 = var7.useLegacyExperiments;
            var6 = var6.bind(var7)();
            var13 = var6.experiments;
            var _closure2_slot1 = var13;
            var12 = var6.overridesInfo;
            var _closure2_slot2 = var12;
            var6 = 9;
            var6 = var4[var6];
            var7 = var3.bind(var5)(var6);
            var6 = var7.useApexExperiments;
            var7 = var6.bind(var7)();
            var6 = var7.experiments;
            var _closure2_slot3 = var6;
            var11 = var7.overridesInfo;
            var _closure2_slot4 = var11;
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var7 = new Array(3);
            var7[0] = var13;
            var7[1] = var6;
            var7[2] = var8;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var2 = var2[var1];
                    var1 = null;
                    if(!(var1 == var2)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var2 = var4[var3];
case 7:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var6, var7);
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var6 = new Array(3);
            var6[0] = var12;
            var6[1] = var11;
            var6[2] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var2 = var2[var1];
                    var1 = null;
                    if(!(var1 == var2)) { _fun0005_ip = 7; continue _fun0005 }
case 8:
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var2 = var4[var3];
case 7:
                    var3 = var1 != var2;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 9; continue _fun0005 }
case 10:
                    var1 = var2;
case 9:
                    return var1;
                }
            };
            var6 = var9.bind(var10)(var1, var6);
            var1 = 22;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useCanSeeExperimentEmbeds;
            var3 = var1.bind(var3)();
            var4 = null;
            var9 = var4 != var7;
            var1 = null;
            if(!var9) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = null;
            if(!var3) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var4 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = {};
            var2['id'] = var8;
            var2['experiment'] = var7;
            var2['override'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createExperimentEmbed(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var11 = arg1;
            var8 = arg2;
            var4 = _closure1_slot1;
            var13 = _closure1_slot2;
            var3 = 6;
            var3 = var13[var3];
            var9 = undefined;
            var3 = var4.bind(var9)(var3);
            var4 = var3.bind(var9)(var8);
            var3 = var4.colors;
            var6 = var4.baseColors;
            var10 = _closure1_slot0;
            var16 = 7;
            var4 = var13[var16];
            var5 = var10.bind(var9)(var4);
            var4 = var5.getExperimentFromEmbedURL;
            var4 = var4.bind(var5)(var11);
            var5 = var13[var16];
            var7 = var10.bind(var9)(var5);
            var5 = var7.getExperimentTreatmentFromEmbedURL;
            var12 = var5.bind(var7)(var11);
            var _closure2_slot0 = var12;
            var5 = 8;
            var5 = var13[var5];
            var7 = var10.bind(var9)(var5);
            var5 = var7.getLegacyExperiments;
            var5 = var5.bind(var7)();
            var11 = var5.experiments;
            var7 = var5.overridesInfo;
            var5 = 9;
            var5 = var13[var5];
            var10 = var10.bind(var9)(var5);
            var5 = var10.getApexExperiments;
            var5 = var5.bind(var10)();
            var13 = var5.experiments;
            var10 = var5.overridesInfo;
            var5 = null;
            var14 = var5 != var4;
            var15 = null;
            if(!var14) { _fun0006_ip = 14; continue _fun0006 }
case 15:
            var11 = var11[var4];
            if(!(var5 == var11)) { _fun0006_ip = 16; continue _fun0006 }
case 17:
            var11 = var13[var4];
case 16:
            var15 = var11;
case 14:
            if(!(var5 != var4)) { _fun0006_ip = 18; continue _fun0006 }
case 19:
            if(!(var5 != var15)) { _fun0006_ip = 18; continue _fun0006 }
case 20:
            var7 = var7[var4];
            if(!(var5 == var7)) { _fun0006_ip = 12; continue _fun0006 }
case 21:
            var7 = var10[var4];
case 12:
            var11 = var5 != var7;
            var10 = null;
            if(!var11) { _fun0006_ip = 22; continue _fun0006 }
case 23:
            var10 = var7;
case 22:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var16];
            var11 = var11.bind(var9)(var7);
            var7 = var11.getExperimentBuckets;
            var11 = var7.bind(var11)(var15);
            var7 = var11.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.value;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var7.bind(var11)(var1);
            if(!(var5 == var1)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var7 = _closure1_slot6;
            var11 = var7.EXPERIMENT;
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var7 = _closure1_slot6;
            var11 = var7.EXPERIMENT_TREATMENT;
case 26:
            var13 = _closure1_slot5;
            var7 = var13.getId;
            var18 = var7.bind(var13)();
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var14 = 13;
            var14 = var7[var14];
            var17 = var13.bind(var9)(var14);
            var14 = var17.getExperimentServerAssignment;
            var14 = var14.bind(var17)(var15, var18);
            var7 = var7[var16];
            var13 = var13.bind(var9)(var7);
            var7 = var13.getExperimentServerAssignmentLabel;
            var13 = var7.bind(var13)(var15, var14);
            var7 = _closure1_slot6;
            var7 = var7.EXPERIMENT_TREATMENT;
            if(!(var11 !== var7)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var7 = {};
            var20 = var7;
            var19 = var6;
            var11 = copyDataProperties(var20, var19);
            var14 = 'EXPERIMENT';
            var11 = 'headerText';
            var7[10] = var14;
            var11 = 'titleText';
            var7[10] = var4;
            var14 = var3.titleColor;
            var11 = 'titleColor';
            var7[10] = var14;
            if(!(var5 == var10)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var11 = global;
            var11 = var11.HermesInternal;
            var14 = var11.concat;
            var11 = 'Server Assignment: ';
            var14 = var14.bind(var11)(var13);
            _fun0006_ip = 31; continue _fun0006;
case 29:
            var16 = var10.variantId;
            var11 = global;
            var11 = var11.HermesInternal;
            var15 = var11.concat;
            var11 = 'Client Override Applied: Treatment ';
            var14 = var15.bind(var11)(var16);
case 31:
            var11 = 'subtitle';
            var7[10] = var14;
            var14 = var3.subtitleColor;
            var11 = 'subtitleColor';
            var7[10] = var14;
            var14 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 14;
            var11 = var17[var11];
            var15 = var14.bind(var9)(var11);
            var14 = var15.getAssetUriForEmbed;
            var16 = _closure1_slot1;
            var11 = 15;
            var11 = var17[var11];
            var11 = var16.bind(var9)(var11);
            var14 = var14.bind(var15)(var11);
            var11 = 'thumbnailUrl';
            var7[10] = var14;
            var14 = var3.backgroundColor;
            var11 = 'thumbnailBackgroundColor';
            var7[10] = var14;
            var14 = var3.acceptLabelGreenColor;
            var11 = 'acceptLabelColor';
            var7[10] = var14;
            var14 = var3.acceptLabelGreenBackgroundColor;
            var11 = 'acceptLabelBackgroundColor';
            var7[10] = var14;
            var14 = 'View Experiment Details';
            var11 = 'acceptLabelText';
            var7[10] = var14;
            var14 = true;
            var11 = 'embedCanBeTapped';
            var7[10] = var14;
            var11 = _closure1_slot7;
            var14 = var11.GUILD;
            var11 = 'type';
            var7[10] = var14;
            return var7;
case 27:
            if(!(var5 == var1)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var7 = global;
            var7 = var7.HermesInternal;
            var11 = var7.concat;
            var7 = 'Server Config: ';
            var11 = var11.bind(var7)(var13);
            _fun0006_ip = 34; continue _fun0006;
case 32:
            var11 = var1.label;
case 34:
            var7 = var5 != var10;
            if(!var7) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var7 = var5 != var1;
case 35:
            if(!var7) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var10 = var10.variantId;
            var1 = var1.value;
            var7 = var10 === var1;
case 37:
            var1 = {};
            var20 = var1;
            var19 = var6;
            var10 = copyDataProperties(var20, var19);
            var13 = 'EXPERIMENT TREATMENT';
            var10 = 'headerText';
            var1[9] = var13;
            var10 = 'titleText';
            var1[9] = var4;
            var13 = var3.titleColor;
            var10 = 'titleColor';
            var1[9] = var13;
            var10 = 'subtitle';
            var1[9] = var11;
            var11 = var3.subtitleColor;
            var10 = 'subtitleColor';
            var1[9] = var11;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 14;
            var10 = var15[var10];
            var13 = var11.bind(var9)(var10);
            var11 = var13.getAssetUriForEmbed;
            var14 = _closure1_slot1;
            var10 = 15;
            var10 = var15[var10];
            var10 = var14.bind(var9)(var10);
            var11 = var11.bind(var13)(var10);
            var10 = 'thumbnailUrl';
            var1[9] = var11;
            var11 = var3.backgroundColor;
            var10 = 'thumbnailBackgroundColor';
            var1[9] = var11;
            if(var7) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var11 = var3.acceptLabelGreenColor;
            _fun0006_ip = 41; continue _fun0006;
case 39:
            var11 = var3.clearLabelRedColor;
case 41:
            var10 = 'acceptLabelColor';
            var1[9] = var11;
            if(var7) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var11 = var3.acceptLabelGreenBackgroundColor;
            _fun0006_ip = 44; continue _fun0006;
case 42:
            var11 = var3.clearLabelRedBackgroundColor;
case 44:
            var10 = 'acceptLabelBackgroundColor';
            var1[9] = var11;
            var10 = global;
            var10 = var10.HermesInternal;
            var11 = var10.concat;
            if(var7) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var7 = 'Apply Treatment ';
            var10 = var11.bind(var7)(var12);
            _fun0006_ip = 47; continue _fun0006;
case 45:
            var7 = 'Clear Treatment ';
            var10 = var11.bind(var7)(var12);
case 47:
            var7 = 'acceptLabelText';
            var1[6] = var10;
            var10 = true;
            var7 = 'embedCanBeTapped';
            var1[6] = var10;
            var7 = _closure1_slot7;
            var10 = var7.GUILD;
            var7 = 'type';
            var1[6] = var10;
            return var1;
case 18:
            var1 = {};
            var20 = var1;
            var19 = var6;
            var6 = copyDataProperties(var20, var19);
            var7 = 'EXPERIMENT';
            var6 = 'headerText';
            var1[5] = var7;
            var7 = var5 == var4;
            var5 = 'Unknown Experiment';
            var6 = var5;
            if(var7) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var6 = var4;
case 48:
            var4 = 'titleText';
            var1[3] = var6;
            var6 = var3.titleColor;
            var4 = 'titleColor';
            var1[3] = var6;
            var4 = 'subtitle';
            var1[3] = var5;
            var5 = var3.subtitleColor;
            var4 = 'subtitleColor';
            var1[3] = var5;
            var5 = 'This client is missing this experiment. You may need to open the surface where the experiment is used first.';
            var4 = 'bodyText';
            var1[3] = var5;
            var5 = var3.bodyTextColor;
            var4 = 'bodyTextColor';
            var1[3] = var5;
            var6 = _closure1_slot4;
            var5 = var6.resolveAssetSource;
            var7 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 10;
            var4 = var10[var4];
            var7 = var7.bind(var9)(var4);
            var4 = var7.isThemeDark;
            var4 = var4.bind(var7)(var8);
            var8 = _closure1_slot1;
            var10 = _closure1_slot2;
            if(var4) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = 12;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            _fun0006_ip = 52; continue _fun0006;
case 50:
            var7 = 11;
            var7 = var10[var7];
            var4 = var8.bind(var9)(var7);
case 52:
            var4 = var5.bind(var6)(var4);
            var5 = var4.uri;
            var4 = 'thumbnailUrl';
            var1[3] = var5;
            var4 = var3.thumbnailBackgroundColor;
            var3 = 'thumbnailBackgroundColor';
            var1[2] = var4;
            var2 = _closure1_slot7;
            var3 = var2.GUILD;
            var2 = 'type';
            var1[1] = var3;
            return var1;
        }
    };
    var3['createExperimentEmbed'] = var2;
    return var1;
})();