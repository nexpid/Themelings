// app/modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot4 = var4;
    var4 = 1;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.State;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot7 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/embeds/coded_links/BuildOverrideEmbed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function createBuildOverrideEmbed(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var13 = arg2;
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 3;
            var1 = var4[var1];
            var11 = undefined;
            var1 = var2.bind(var11)(var1);
            var1 = var1.bind(var11)(var13);
            var4 = var1.colors;
            var2 = var1.baseColors;
            var7 = _closure1_slot5;
            var1 = var7.getCurrentBuildOverride;
            var1 = var1.bind(var7)();
            var6 = var7.getBuildOverride;
            var5 = arg1;
            var6 = var6.bind(var7)(var5);
            var7 = var6.state;
            var5 = _closure1_slot6;
            var5 = var5.Resolving;
            if(!(var7 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var6.override;
            var14 = null;
            var7 = var14 == var5;
            var8 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var5.targetBuildOverride;
            var5 = var14 == var7;
            var8 = undefined;
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = _closure1_slot0;
            var10 = _closure1_slot3;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var11)(var5);
            var5 = var5.DEVICE_FIELD;
            var5 = var7[var5];
            var7 = var14 == var5;
            var8 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var8 = var5.id;
case 4:
            var7 = var14 != var8;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var10 = var1.overrides;
            var9 = var14 == var10;
            var5 = undefined;
            if(var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var9 = 4;
            var9 = var15[var9];
            var9 = var12.bind(var11)(var9);
            var9 = var9.DEVICE_FIELD;
            var9 = var10[var9];
            var10 = var14 == var9;
            var5 = undefined;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var5 = var9.id;
case 10:
            var7 = var8 === var5;
case 8:
            var9 = _closure1_slot1;
            var15 = _closure1_slot3;
            var5 = 5;
            var5 = var15[var5];
            var12 = var9.bind(var11)(var5);
            var10 = var6.override;
            var9 = _closure1_slot2;
            var5 = 6;
            var5 = var15[var5];
            var9 = var9.bind(var11)(var5);
            var5 = var9.getConstants;
            var5 = var5.bind(var9)();
            var9 = var5.Version;
            var5 = ['discord_ios', 'discord_android'];
            var5 = var12.bind(var11)(var10, var5, var9);
            var9 = var1.state;
            var1 = _closure1_slot6;
            var1 = var1.Invalid;
            if(!(var9 !== var1)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var9 = var6.state;
            var1 = _closure1_slot6;
            var1 = var1.Invalid;
            if(!(var9 !== var1)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var1 = var6.override;
            if(!(var14 != var1)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            if(!(var14 != var8)) { _fun0001_ip = 13; continue _fun0001 }
case 17:
            var1 = var5.valid;
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 13:
            var1 = {};
            var20 = var1;
            var19 = var2;
            var9 = copyDataProperties(var20, var19);
            var10 = _closure1_slot0;
            var17 = _closure1_slot3;
            var16 = 7;
            var9 = var17[var16];
            var9 = var10.bind(var11)(var9);
            var15 = var9.intl;
            var12 = var15.string;
            var9 = var17[var16];
            var9 = var10.bind(var11)(var9);
            var9 = var9.t;
            var9 = var9.d34xi4;
            var12 = var12.bind(var15)(var9);
            var9 = var12.toLocaleUpperCase;
            var12 = var9.bind(var12)();
            var9 = 'headerText';
            var1[8] = var12;
            var9 = 8;
            var9 = var17[var9];
            var12 = var10.bind(var11)(var9);
            var10 = var12.processColorOrThrow;
            var15 = _closure1_slot1;
            var9 = 9;
            var9 = var17[var9];
            var9 = var15.bind(var11)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var10 = var10.bind(var12)(var9);
            var9 = 'titleColor';
            var1[8] = var10;
            var9 = var5.valid;
            if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var5.reason;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var15 = _closure1_slot0;
            var5 = _closure1_slot3;
            var10 = var5[var16];
            var10 = var15.bind(var11)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var5 = var5[var16];
            var5 = var15.bind(var11)(var5);
            var5 = var5.t;
            var5 = var5.ODXApH;
            var9 = var10.bind(var12)(var5);
case 21:
            var5 = 'titleText';
            var1[4] = var9;
            var5 = 'subtitle';
            var1[4] = var8;
            var5 = var14 != var8;
            var9 = undefined;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var9 = var4.subtitleColor;
case 22:
            var5 = 'subtitleColor';
            var1[4] = var9;
            var10 = _closure1_slot4;
            var9 = var10.resolveAssetSource;
            var12 = _closure1_slot0;
            var15 = _closure1_slot3;
            var5 = 10;
            var5 = var15[var5];
            var12 = var12.bind(var11)(var5);
            var5 = var12.isThemeDark;
            var5 = var5.bind(var12)(var13);
            var13 = _closure1_slot1;
            var15 = _closure1_slot3;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = 12;
            var5 = var15[var5];
            var5 = var13.bind(var11)(var5);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var12 = 11;
            var12 = var15[var12];
            var5 = var13.bind(var11)(var12);
case 26:
            var5 = var9.bind(var10)(var5);
            var9 = var5.uri;
            var5 = 'thumbnailUrl';
            var1[4] = var9;
            var9 = var4.thumbnailBackgroundColor;
            var5 = 'thumbnailBackgroundColor';
            var1[4] = var9;
            var5 = _closure1_slot7;
            var9 = var5.GUILD;
            var5 = 'type';
            var1[4] = var9;
            _fun0001_ip = 27; continue _fun0001;
case 18:
            var5 = {};
            var20 = var5;
            var19 = var2;
            var9 = copyDataProperties(var20, var19);
            var10 = _closure1_slot0;
            var9 = _closure1_slot3;
            var12 = 7;
            var13 = var9[var12];
            var13 = var10.bind(var11)(var13);
            var16 = var13.intl;
            var15 = var16.string;
            var13 = var9[var12];
            var13 = var10.bind(var11)(var13);
            var13 = var13.t;
            var13 = var13.Wj3LW4;
            var15 = var15.bind(var16)(var13);
            var13 = var15.toLocaleUpperCase;
            var15 = var13.bind(var15)();
            var13 = 'headerText';
            var5[12] = var15;
            var15 = var4.headerColor;
            var13 = 'headerColor';
            var5[12] = var15;
            var9 = var9[var12];
            var9 = var10.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var6 = var6.override;
            var15 = var14 == var6;
            var13 = undefined;
            if(var15) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var15 = var6.targetBuildOverride;
            var6 = var14 == var15;
            var13 = undefined;
            if(var6) { _fun0001_ip = 28; continue _fun0001 }
case 30:
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var6 = 4;
            var6 = var17[var6];
            var6 = var16.bind(var11)(var6);
            var6 = var6.DEVICE_FIELD;
            var6 = var15[var6];
            var14 = var14 == var6;
            var13 = undefined;
            if(var14) { _fun0001_ip = 28; continue _fun0001 }
case 31:
            var13 = var6.type;
case 28:
            var6 = 'branch';
            if(!(var6 !== var13)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var13 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var12];
            var6 = var13.bind(var11)(var6);
            var6 = var6.t;
            var6 = var6.RCYGot;
            _fun0001_ip = 34; continue _fun0001;
case 32:
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var13 = var13[var12];
            var13 = var14.bind(var11)(var13);
            var13 = var13.t;
            var6 = var13.p9TwTG;
case 34:
            var9 = var9.bind(var10)(var6);
            var6 = 'titleText';
            var5[5] = var9;
            var9 = var4.titleColor;
            var6 = 'titleColor';
            var5[5] = var9;
            var6 = 'subtitle';
            var5[5] = var8;
            var8 = var4.subtitleColor;
            var6 = 'subtitleColor';
            var5[5] = var8;
            var9 = _closure1_slot4;
            var8 = var9.resolveAssetSource;
            var10 = _closure1_slot1;
            var13 = _closure1_slot3;
            var6 = 13;
            var6 = var13[var6];
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var8 = var6.uri;
            var6 = 'thumbnailUrl';
            var5[5] = var8;
            var8 = 'primary';
            if(!var7) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var8 = 'destructive';
case 35:
            var6 = 'acceptButtonVariant';
            var5[5] = var8;
            var10 = _closure1_slot0;
            var6 = _closure1_slot3;
            var8 = var6[var12];
            var8 = var10.bind(var11)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var6[var12];
            var6 = var10.bind(var11)(var6);
            var6 = var6.t;
            if(var7) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var7 = var6.nOunHC;
            var7 = var8.bind(var9)(var7);
            _fun0001_ip = 39; continue _fun0001;
case 37:
            var6 = var6.tX4xrt;
            var7 = var8.bind(var9)(var6);
case 39:
            var6 = 'acceptLabelText';
            var5[5] = var7;
            var7 = true;
            var6 = 'embedCanBeTapped';
            var5[5] = var7;
            var6 = 'canBeAccepted';
            var5[5] = var7;
            var6 = _closure1_slot7;
            var7 = var6.GUILD;
            var6 = 'type';
            var5[5] = var7;
            var1 = var5;
case 27:
            return var1;
case 2:
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
            var20 = var1;
            var19 = var2;
            var2 = copyDataProperties(var20, var19);
            return var1;
        }
    };
    var3['createBuildOverrideEmbed'] = var2;
    return var1;
})();