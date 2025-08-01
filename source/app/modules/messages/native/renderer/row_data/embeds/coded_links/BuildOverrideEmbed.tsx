// app/modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.State;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function BuildOverrideEmbed(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.url;
            var _closure2_slot0 = var13;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var2 = 16;
            var2 = var12[var2];
            var4 = undefined;
            var3 = var11.bind(var4)(var2);
            var2 = var3.useMessageRendererTheme;
            var14 = var2.bind(var3)();
            var2 = 5;
            var2 = var12[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useEmbedThemeColors;
            var2 = var2.bind(var3)(var14);
            var7 = var2.colors;
            var5 = var2.baseColors;
            var2 = 17;
            var3 = var12[var2];
            var10 = var11.bind(var4)(var3);
            var9 = var10.useStateFromStores;
            var3 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = new Array(1);
            var3[0] = var13;
            var2 = var12[var2];
            var2 = var11.bind(var4)(var2);
            var20 = var2.statesWillNeverBeEqual;
            var22 = function() {
                var1 = {};
                var4 = _closure1_slot5;
                var2 = var4.getCurrentBuildOverride;
                var2 = var2.bind(var4)();
                var1['currentBuildOverride'] = var2;
                var3 = var4.getBuildOverride;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var1['buildOverride'] = var2;
                return var1;
            };
            var24 = var10;
            var23 = var8;
            var21 = var3;
            var1 = var24[var9](var23, var22, var21, var20, var19);
            var2 = var1.currentBuildOverride;
            var1 = var1.buildOverride;
            var8 = var2.state;
            var3 = _closure1_slot6;
            var3 = var3.Resolving;
            if(!(var8 !== var3)) { _fun0001_ip = 1331; continue _fun0001 }
 187:
            var8 = var1.state;
            var3 = _closure1_slot6;
            var3 = var3.Resolving;
            if(!(var8 !== var3)) { _fun0001_ip = 1331; continue _fun0001 }
 209:
            var3 = var1.override;
            var8 = null;
            var9 = var8 == var3;
            var11 = undefined;
            if(var9) { _fun0001_ip = 285; continue _fun0001 }
 226:
            var9 = var3.targetBuildOverride;
            var3 = var8 == var9;
            var11 = undefined;
            if(var3) { _fun0001_ip = 285; continue _fun0001 }
 241:
            var10 = _closure1_slot0;
            var12 = _closure1_slot3;
            var3 = 6;
            var3 = var12[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.DEVICE_FIELD;
            var3 = var9[var3];
            var9 = var8 == var3;
            var11 = undefined;
            if(var9) { _fun0001_ip = 285; continue _fun0001 }
 280:
            var11 = var3.id;
 285:
            var10 = var8 != var11;
            if(!var10) { _fun0001_ip = 355; continue _fun0001 }
 292:
            var12 = var2.overrides;
            var9 = var8 == var12;
            var3 = undefined;
            if(var9) { _fun0001_ip = 351; continue _fun0001 }
 307:
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var9 = 6;
            var9 = var15[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var9.DEVICE_FIELD;
            var9 = var12[var9];
            var12 = var8 == var9;
            var3 = undefined;
            if(var12) { _fun0001_ip = 351; continue _fun0001 }
 346:
            var3 = var9.id;
 351:
            var10 = var11 === var3;
 355:
            var9 = _closure1_slot1;
            var15 = _closure1_slot3;
            var3 = 7;
            var3 = var15[var3];
            var13 = var9.bind(var4)(var3);
            var12 = var1.override;
            var9 = _closure1_slot2;
            var3 = 8;
            var3 = var15[var3];
            var9 = var9.bind(var4)(var3);
            var3 = var9.getConstants;
            var3 = var3.bind(var9)();
            var9 = var3.Version;
            var3 = ['discord_ios', 'discord_android'];
            var9 = var13.bind(var4)(var12, var3, var9);
            var3 = var2.state;
            var2 = _closure1_slot6;
            var2 = var2.Invalid;
            if(!(var3 !== var2)) { _fun0001_ip = 494; continue _fun0001 }
 449:
            var3 = var1.state;
            var2 = _closure1_slot6;
            var2 = var2.Invalid;
            if(!(var3 !== var2)) { _fun0001_ip = 494; continue _fun0001 }
 468:
            var1 = var1.override;
            if(!(var8 != var1)) { _fun0001_ip = 494; continue _fun0001 }
 478:
            if(!(var8 != var11)) { _fun0001_ip = 494; continue _fun0001 }
 482:
            var1 = var9.valid;
            if(var1) { _fun0001_ip = 909; continue _fun0001 }
 494:
            var3 = _closure1_slot8;
            var16 = _closure1_slot1;
            var18 = _closure1_slot3;
            var1 = 18;
            var1 = var18[var1];
            var2 = var16.bind(var4)(var1);
            var1 = {};
            var23 = var1;
            var22 = var5;
            var12 = copyDataProperties(var23, var22);
            var13 = _closure1_slot0;
            var17 = 9;
            var12 = var18[var17];
            var12 = var13.bind(var4)(var12);
            var19 = var12.intl;
            var15 = var19.string;
            var12 = var18[var17];
            var12 = var13.bind(var4)(var12);
            var12 = var12.t;
            var12 = var12.d34xi4;
            var15 = var15.bind(var19)(var12);
            var12 = var15.toLocaleUpperCase;
            var15 = var12.bind(var15)();
            var12 = 'headerText';
            var1[var12] = var15;
            var12 = 10;
            var12 = var18[var12];
            var15 = var13.bind(var4)(var12);
            var13 = var15.processColorOrThrow;
            var12 = 11;
            var12 = var18[var12];
            var12 = var16.bind(var4)(var12);
            var12 = var12.unsafe_rawColors;
            var12 = var12.RED_400;
            var13 = var13.bind(var15)(var12);
            var12 = 'titleColor';
            var1[var12] = var13;
            var12 = var9.valid;
            if(var12) { _fun0001_ip = 672; continue _fun0001 }
 664:
            var12 = var9.reason;
            _fun0001_ip = 724; continue _fun0001;
 672:
            var16 = _closure1_slot0;
            var9 = _closure1_slot3;
            var13 = var9[var17];
            var13 = var16.bind(var4)(var13);
            var15 = var13.intl;
            var13 = var15.string;
            var9 = var9[var17];
            var9 = var16.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.ODXApK;
            var12 = var13.bind(var15)(var9);
 724:
            var9 = 'titleText';
            var1[var9] = var12;
            var9 = 'subtitle';
            var1[var9] = var11;
            var8 = var8 != var11;
            var9 = undefined;
            if(!var8) { _fun0001_ip = 757; continue _fun0001 }
 751:
            var9 = var7.subtitleColor;
 757:
            var8 = 'subtitleColor';
            var1[var8] = var9;
            var12 = _closure1_slot4;
            var9 = var12.resolveAssetSource;
            var13 = _closure1_slot0;
            var15 = _closure1_slot3;
            var8 = 12;
            var8 = var15[var8];
            var13 = var13.bind(var4)(var8);
            var8 = var13.isThemeDark;
            var8 = var8.bind(var13)(var14);
            var14 = _closure1_slot1;
            var15 = _closure1_slot3;
            if(var8) { _fun0001_ip = 832; continue _fun0001 }
 818:
            var8 = 14;
            var8 = var15[var8];
            var8 = var14.bind(var4)(var8);
            _fun0001_ip = 844; continue _fun0001;
 832:
            var13 = 13;
            var13 = var15[var13];
            var8 = var14.bind(var4)(var13);
 844:
            var8 = var9.bind(var12)(var8);
            var9 = var8.uri;
            var8 = 'thumbnailUrl';
            var1[var8] = var9;
            var9 = var7.thumbnailBackgroundColor;
            var8 = 'thumbnailBackgroundColor';
            var1[var8] = var9;
            var8 = _closure1_slot7;
            var9 = var8.GUILD;
            var8 = 'type';
            var1[var8] = var9;
            var1 = var3.bind(var4)(var2, var1);
            _fun0001_ip = 1329; continue _fun0001;
 909:
            var8 = _closure1_slot8;
            var13 = _closure1_slot1;
            var15 = _closure1_slot3;
            var2 = 18;
            var2 = var15[var2];
            var3 = var13.bind(var4)(var2);
            var2 = {};
            var23 = var2;
            var22 = var5;
            var9 = copyDataProperties(var23, var22);
            var17 = _closure1_slot0;
            var14 = 9;
            var9 = var15[var14];
            var9 = var17.bind(var4)(var9);
            var16 = var9.intl;
            var12 = var16.string;
            var9 = var15[var14];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.Wj3LW1;
            var12 = var12.bind(var16)(var9);
            var9 = var12.toLocaleUpperCase;
            var12 = var9.bind(var12)();
            var9 = 'headerText';
            var2[var9] = var12;
            var12 = var7.headerColor;
            var9 = 'headerColor';
            var2[var9] = var12;
            var9 = var15[var14];
            var9 = var17.bind(var4)(var9);
            var16 = var9.intl;
            var12 = var16.string;
            var9 = var15[var14];
            var9 = var17.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.RCYGoq;
            var12 = var12.bind(var16)(var9);
            var9 = 'titleText';
            var2[var9] = var12;
            var12 = var7.titleColor;
            var9 = 'titleColor';
            var2[var9] = var12;
            var9 = 'subtitle';
            var2[var9] = var11;
            var11 = var7.subtitleColor;
            var9 = 'subtitleColor';
            var2[var9] = var11;
            var12 = _closure1_slot4;
            var11 = var12.resolveAssetSource;
            var9 = 15;
            var9 = var15[var9];
            var9 = var13.bind(var4)(var9);
            var9 = var11.bind(var12)(var9);
            var11 = var9.uri;
            var9 = 'thumbnailUrl';
            var2[var9] = var11;
            if(var10) { _fun0001_ip = 1175; continue _fun0001 }
 1167:
            var11 = var7.acceptLabelGreenColor;
            _fun0001_ip = 1181; continue _fun0001;
 1175:
            var11 = var7.clearLabelRedColor;
 1181:
            var9 = 'acceptLabelColor';
            var2[var9] = var11;
            if(var10) { _fun0001_ip = 1201; continue _fun0001 }
 1193:
            var11 = var7.acceptLabelGreenBackgroundColor;
            _fun0001_ip = 1207; continue _fun0001;
 1201:
            var11 = var7.clearLabelRedBackgroundColor;
 1207:
            var9 = 'acceptLabelBackgroundColor';
            var2[var9] = var11;
            var13 = _closure1_slot0;
            var9 = _closure1_slot3;
            var11 = var9[var14];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var14];
            var9 = var13.bind(var4)(var9);
            var9 = var9.t;
            if(var10) { _fun0001_ip = 1273; continue _fun0001 }
 1260:
            var10 = var9.nOunHB;
            var10 = var11.bind(var12)(var10);
            _fun0001_ip = 1284; continue _fun0001;
 1273:
            var9 = var9.tX4xrq;
            var10 = var11.bind(var12)(var9);
 1284:
            var9 = 'acceptLabelText';
            var2[var9] = var10;
            var10 = true;
            var9 = 'embedCanBeTapped';
            var2[var9] = var10;
            var9 = _closure1_slot7;
            var10 = var9.GUILD;
            var9 = 'type';
            var2[var9] = var10;
            var1 = var8.bind(var4)(var3, var2);
 1329:
            return var1;
 1331:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 18;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = 'RESOLVING';
            var1['headerText'] = var8;
            var8 = var7.resolvingGradientEnd;
            var1['resolvingGradientEnd'] = var8;
            var7 = var7.resolvingGradientStart;
            var1['resolvingGradientStart'] = var7;
            var6 = _closure1_slot7;
            var6 = var6.GUILD;
            var1['type'] = var6;
            var23 = var1;
            var22 = var5;
            var5 = copyDataProperties(var23, var22);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function createBuildOverrideEmbed(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var12 = arg2;
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 5;
            var1 = var4[var1];
            var11 = undefined;
            var1 = var2.bind(var11)(var1);
            var1 = var1.bind(var11)(var12);
            var4 = var1.colors;
            var2 = var1.baseColors;
            var6 = _closure1_slot5;
            var1 = var6.getCurrentBuildOverride;
            var9 = var1.bind(var6)();
            var5 = var6.getBuildOverride;
            var1 = arg1;
            var1 = var5.bind(var6)(var1);
            var6 = var1.state;
            var5 = _closure1_slot6;
            var5 = var5.Resolving;
            if(!(var6 !== var5)) { _fun0002_ip = 1175; continue _fun0002 }
 94:
            var6 = var1.override;
            var5 = null;
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0002_ip = 170; continue _fun0002 }
 111:
            var7 = var6.targetBuildOverride;
            var6 = var5 == var7;
            var8 = undefined;
            if(var6) { _fun0002_ip = 170; continue _fun0002 }
 126:
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 6;
            var6 = var13[var6];
            var6 = var10.bind(var11)(var6);
            var6 = var6.DEVICE_FIELD;
            var6 = var7[var6];
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0002_ip = 170; continue _fun0002 }
 165:
            var8 = var6.id;
 170:
            var7 = var5 != var8;
            if(!var7) { _fun0002_ip = 240; continue _fun0002 }
 177:
            var13 = var9.overrides;
            var10 = var5 == var13;
            var6 = undefined;
            if(var10) { _fun0002_ip = 236; continue _fun0002 }
 192:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var10 = 6;
            var10 = var15[var10];
            var10 = var14.bind(var11)(var10);
            var10 = var10.DEVICE_FIELD;
            var10 = var13[var10];
            var13 = var5 == var10;
            var6 = undefined;
            if(var13) { _fun0002_ip = 236; continue _fun0002 }
 231:
            var6 = var10.id;
 236:
            var7 = var8 === var6;
 240:
            var10 = _closure1_slot1;
            var15 = _closure1_slot3;
            var6 = 7;
            var6 = var15[var6];
            var14 = var10.bind(var11)(var6);
            var13 = var1.override;
            var10 = _closure1_slot2;
            var6 = 8;
            var6 = var15[var6];
            var10 = var10.bind(var11)(var6);
            var6 = var10.getConstants;
            var6 = var6.bind(var10)();
            var10 = var6.Version;
            var6 = ['discord_ios', 'discord_android'];
            var6 = var14.bind(var11)(var13, var6, var10);
            var10 = var9.state;
            var9 = _closure1_slot6;
            var9 = var9.Invalid;
            if(!(var10 !== var9)) { _fun0002_ip = 379; continue _fun0002 }
 334:
            var10 = var1.state;
            var9 = _closure1_slot6;
            var9 = var9.Invalid;
            if(!(var10 !== var9)) { _fun0002_ip = 379; continue _fun0002 }
 353:
            var1 = var1.override;
            if(!(var5 != var1)) { _fun0002_ip = 379; continue _fun0002 }
 363:
            if(!(var5 != var8)) { _fun0002_ip = 379; continue _fun0002 }
 367:
            var1 = var6.valid;
            if(var1) { _fun0002_ip = 772; continue _fun0002 }
 379:
            var1 = {};
            var19 = var1;
            var18 = var2;
            var9 = copyDataProperties(var19, var18);
            var10 = _closure1_slot0;
            var16 = _closure1_slot3;
            var15 = 9;
            var9 = var16[var15];
            var9 = var10.bind(var11)(var9);
            var14 = var9.intl;
            var13 = var14.string;
            var9 = var16[var15];
            var9 = var10.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.d34xi4;
            var13 = var13.bind(var14)(var9);
            var9 = var13.toLocaleUpperCase;
            var13 = var9.bind(var13)();
            var9 = 'headerText';
            var1[var9] = var13;
            var9 = 10;
            var9 = var16[var9];
            var13 = var10.bind(var11)(var9);
            var10 = var13.processColorOrThrow;
            var14 = _closure1_slot1;
            var9 = 11;
            var9 = var16[var9];
            var9 = var14.bind(var11)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var10 = var10.bind(var13)(var9);
            var9 = 'titleColor';
            var1[var9] = var10;
            var9 = var6.valid;
            if(var9) { _fun0002_ip = 541; continue _fun0002 }
 533:
            var9 = var6.reason;
            _fun0002_ip = 593; continue _fun0002;
 541:
            var14 = _closure1_slot0;
            var6 = _closure1_slot3;
            var10 = var6[var15];
            var10 = var14.bind(var11)(var10);
            var13 = var10.intl;
            var10 = var13.string;
            var6 = var6[var15];
            var6 = var14.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.ODXApK;
            var9 = var10.bind(var13)(var6);
 593:
            var6 = 'titleText';
            var1[var6] = var9;
            var6 = 'subtitle';
            var1[var6] = var8;
            var5 = var5 != var8;
            var6 = undefined;
            if(!var5) { _fun0002_ip = 626; continue _fun0002 }
 620:
            var6 = var4.subtitleColor;
 626:
            var5 = 'subtitleColor';
            var1[var5] = var6;
            var9 = _closure1_slot4;
            var6 = var9.resolveAssetSource;
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var5 = 12;
            var5 = var13[var5];
            var10 = var10.bind(var11)(var5);
            var5 = var10.isThemeDark;
            var5 = var5.bind(var10)(var12);
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            if(var5) { _fun0002_ip = 701; continue _fun0002 }
 687:
            var5 = 14;
            var5 = var13[var5];
            var5 = var12.bind(var11)(var5);
            _fun0002_ip = 713; continue _fun0002;
 701:
            var10 = 13;
            var10 = var13[var10];
            var5 = var12.bind(var11)(var10);
 713:
            var5 = var6.bind(var9)(var5);
            var6 = var5.uri;
            var5 = 'thumbnailUrl';
            var1[var5] = var6;
            var6 = var4.thumbnailBackgroundColor;
            var5 = 'thumbnailBackgroundColor';
            var1[var5] = var6;
            var5 = _closure1_slot7;
            var6 = var5.GUILD;
            var5 = 'type';
            var1[var5] = var6;
            _fun0002_ip = 1173; continue _fun0002;
 772:
            var5 = {};
            var19 = var5;
            var18 = var2;
            var6 = copyDataProperties(var19, var18);
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var12 = 9;
            var6 = var13[var12];
            var6 = var14.bind(var11)(var6);
            var10 = var6.intl;
            var9 = var10.string;
            var6 = var13[var12];
            var6 = var14.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.Wj3LW1;
            var9 = var9.bind(var10)(var6);
            var6 = var9.toLocaleUpperCase;
            var9 = var6.bind(var9)();
            var6 = 'headerText';
            var5[var6] = var9;
            var9 = var4.headerColor;
            var6 = 'headerColor';
            var5[var6] = var9;
            var6 = var13[var12];
            var6 = var14.bind(var11)(var6);
            var10 = var6.intl;
            var9 = var10.string;
            var6 = var13[var12];
            var6 = var14.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.RCYGoq;
            var9 = var9.bind(var10)(var6);
            var6 = 'titleText';
            var5[var6] = var9;
            var9 = var4.titleColor;
            var6 = 'titleColor';
            var5[var6] = var9;
            var6 = 'subtitle';
            var5[var6] = var8;
            var8 = var4.subtitleColor;
            var6 = 'subtitleColor';
            var5[var6] = var8;
            var9 = _closure1_slot4;
            var8 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var6 = 15;
            var6 = var13[var6];
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var8 = var6.uri;
            var6 = 'thumbnailUrl';
            var5[var6] = var8;
            if(var7) { _fun0002_ip = 1022; continue _fun0002 }
 1014:
            var8 = var4.acceptLabelGreenColor;
            _fun0002_ip = 1028; continue _fun0002;
 1022:
            var8 = var4.clearLabelRedColor;
 1028:
            var6 = 'acceptLabelColor';
            var5[var6] = var8;
            if(var7) { _fun0002_ip = 1048; continue _fun0002 }
 1040:
            var8 = var4.acceptLabelGreenBackgroundColor;
            _fun0002_ip = 1054; continue _fun0002;
 1048:
            var8 = var4.clearLabelRedBackgroundColor;
 1054:
            var6 = 'acceptLabelBackgroundColor';
            var5[var6] = var8;
            var10 = _closure1_slot0;
            var6 = _closure1_slot3;
            var8 = var6[var12];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var6[var12];
            var6 = var10.bind(var11)(var6);
            var6 = var6.t;
            if(var7) { _fun0002_ip = 1120; continue _fun0002 }
 1107:
            var7 = var6.nOunHB;
            var7 = var8.bind(var9)(var7);
            _fun0002_ip = 1131; continue _fun0002;
 1120:
            var6 = var6.tX4xrq;
            var7 = var8.bind(var9)(var6);
 1131:
            var6 = 'acceptLabelText';
            var5[var6] = var7;
            var7 = true;
            var6 = 'embedCanBeTapped';
            var5[var6] = var7;
            var6 = _closure1_slot7;
            var7 = var6.GUILD;
            var6 = 'type';
            var5[var6] = var7;
            var1 = var5;
 1173:
            return var1;
 1175:
            var1 = {};
            var5 = 'RESOLVING';
            var1['headerText'] = var5;
            var5 = var4.resolvingGradientEnd;
            var1['resolvingGradientEnd'] = var5;
            var4 = var4.resolvingGradientStart;
            var1['resolvingGradientStart'] = var4;
            var3 = _closure1_slot7;
            var3 = var3.GUILD;
            var1['type'] = var3;
            var19 = var1;
            var18 = var2;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createBuildOverrideEmbed'] = var2;
    return var1;
})();