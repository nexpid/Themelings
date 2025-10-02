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
            var12 = arg2;
            var2 = _closure1_slot1;
            var4 = _closure1_slot3;
            var1 = 3;
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
            if(!(var6 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.override;
            var5 = null;
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var6.targetBuildOverride;
            var6 = var5 == var7;
            var8 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var6 = 4;
            var6 = var13[var6];
            var6 = var10.bind(var11)(var6);
            var6 = var6.DEVICE_FIELD;
            var6 = var7[var6];
            var7 = var5 == var6;
            var8 = undefined;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            var8 = var6.id;
case 4:
            var7 = var5 != var8;
            if(!var7) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var9.overrides;
            var10 = var5 == var13;
            var6 = undefined;
            if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var10 = 4;
            var10 = var15[var10];
            var10 = var14.bind(var11)(var10);
            var10 = var10.DEVICE_FIELD;
            var10 = var13[var10];
            var13 = var5 == var10;
            var6 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var6 = var10.id;
case 10:
            var7 = var8 === var6;
case 8:
            var10 = _closure1_slot1;
            var15 = _closure1_slot3;
            var6 = 5;
            var6 = var15[var6];
            var14 = var10.bind(var11)(var6);
            var13 = var1.override;
            var10 = _closure1_slot2;
            var6 = 6;
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
            if(!(var10 !== var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var10 = var1.state;
            var9 = _closure1_slot6;
            var9 = var9.Invalid;
            if(!(var10 !== var9)) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var1 = var1.override;
            if(!(var5 != var1)) { _fun0001_ip = 13; continue _fun0001 }
case 16:
            if(!(var5 != var8)) { _fun0001_ip = 13; continue _fun0001 }
case 17:
            var1 = var6.valid;
            if(var1) { _fun0001_ip = 18; continue _fun0001 }
case 13:
            var1 = {};
            var19 = var1;
            var18 = var2;
            var9 = copyDataProperties(var19, var18);
            var10 = _closure1_slot0;
            var16 = _closure1_slot3;
            var15 = 7;
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
            var9 = 8;
            var9 = var16[var9];
            var13 = var10.bind(var11)(var9);
            var10 = var13.processColorOrThrow;
            var14 = _closure1_slot1;
            var9 = 9;
            var9 = var16[var9];
            var9 = var14.bind(var11)(var9);
            var9 = var9.unsafe_rawColors;
            var9 = var9.RED_400;
            var10 = var10.bind(var13)(var9);
            var9 = 'titleColor';
            var1[var9] = var10;
            var9 = var6.valid;
            if(var9) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var9 = var6.reason;
            _fun0001_ip = 21; continue _fun0001;
case 19:
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
case 21:
            var6 = 'titleText';
            var1[var6] = var9;
            var6 = 'subtitle';
            var1[var6] = var8;
            var5 = var5 != var8;
            var6 = undefined;
            if(!var5) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var6 = var4.subtitleColor;
case 22:
            var5 = 'subtitleColor';
            var1[var5] = var6;
            var9 = _closure1_slot4;
            var6 = var9.resolveAssetSource;
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var5 = 10;
            var5 = var13[var5];
            var10 = var10.bind(var11)(var5);
            var5 = var10.isThemeDark;
            var5 = var5.bind(var10)(var12);
            var12 = _closure1_slot1;
            var13 = _closure1_slot3;
            if(var5) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = 12;
            var5 = var13[var5];
            var5 = var12.bind(var11)(var5);
            _fun0001_ip = 26; continue _fun0001;
case 24:
            var10 = 11;
            var10 = var13[var10];
            var5 = var12.bind(var11)(var10);
case 26:
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
            _fun0001_ip = 27; continue _fun0001;
case 18:
            var5 = {};
            var19 = var5;
            var18 = var2;
            var6 = copyDataProperties(var19, var18);
            var14 = _closure1_slot0;
            var13 = _closure1_slot3;
            var12 = 7;
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
            var6 = 13;
            var6 = var13[var6];
            var6 = var10.bind(var11)(var6);
            var6 = var8.bind(var9)(var6);
            var8 = var6.uri;
            var6 = 'thumbnailUrl';
            var5[var6] = var8;
            if(var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var8 = var4.acceptLabelGreenColor;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var8 = var4.clearLabelRedColor;
case 30:
            var6 = 'acceptLabelColor';
            var5[var6] = var8;
            if(var7) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var8 = var4.acceptLabelGreenBackgroundColor;
            _fun0001_ip = 33; continue _fun0001;
case 31:
            var8 = var4.clearLabelRedBackgroundColor;
case 33:
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
            if(var7) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var7 = var6.nOunHB;
            var7 = var8.bind(var9)(var7);
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var6 = var6.tX4xrq;
            var7 = var8.bind(var9)(var6);
case 36:
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
            var19 = var1;
            var18 = var2;
            var2 = copyDataProperties(var19, var18);
            return var1;
        }
    };
    var3['createBuildOverrideEmbed'] = var2;
    return var1;
})();