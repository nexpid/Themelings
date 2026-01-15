// app/modules/premium/powerups/native/GuildPowerupsLevelCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function GuildLevelPowerupHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.active;
            var2 = var1.nextActive;
            var13 = var1.position;
            var1 = _closure1_slot12;
            var4 = undefined;
            var11 = var1.bind(var4)();
            if(!var10) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
            if(!(var1 === var2)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            if(!var10) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var1 = false;
            if(!(var1 !== var2)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var1 = var11.boostContainerInactive;
            var1 = var1.backgroundColor;
            var8 = new Array(2);
            var8[0] = var1;
            var1 = var11.boostContainerInactive;
            var1 = var1.backgroundColor;
            var8[1] = var1;
            _fun0001_ip = 8; continue _fun0001;
case 7:
            var1 = var11.boostContainerActive;
            var2 = var1.backgroundColor;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = var11.boostContainerInactive;
            var2 = var2.backgroundColor;
            var1[1] = var2;
            var8 = var1;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var1 = var11.boostContainerActive;
            var2 = var1.backgroundColor;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = var11.boostContainerActive;
            var2 = var2.backgroundColor;
            var1[1] = var2;
            var8 = var1;
case 9:
            var3 = _closure1_slot11;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.progressContainer;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 8;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var9 = _closure1_slot8;
            var9 = var9.START;
            var5['start'] = var9;
            var9 = _closure1_slot8;
            var9 = var9.END;
            var5['end'] = var9;
            var5['colors'] = var8;
            var9 = var11.progress;
            var8 = new Array(3);
            var8[0] = var9;
            var9 = _closure1_slot5;
            var9 = var9.START;
            var9 = var13 === var9;
            if(!var9) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = var11.progressStart;
case 10:
            var8[1] = var9;
            var9 = _closure1_slot5;
            var9 = var9.END;
            var9 = var13 === var9;
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var9 = var11.progressEnd;
case 12:
            var8[2] = var9;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot4;
            var6 = {};
            var13 = var11.boostContainer;
            var9 = new Array(2);
            var9[0] = var13;
            if(!var10) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var10 = var11.boostContainerActive;
case 14:
            var9[1] = var10;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = 9;
            var9 = var14[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.BoostGemIcon;
            var9 = {};
            var13 = 'xs';
            var9['size'] = var13;
            var13 = _closure1_slot1;
            var12 = 7;
            var12 = var14[var12];
            var12 = var13.bind(var4)(var12);
            var12 = var12.colors;
            var12 = var12.WHITE;
            var9['color'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var2 = function GuildPowerupLevelBody(arg1) {
        var2 = arg1;
        var3 = var2.isActive;
        var7 = var2.index;
        var _closure2_slot0 = var7;
        var2 = _closure1_slot12;
        var4 = undefined;
        var10 = var2.bind(var4)();
        var _closure2_slot1 = var10;
        var15 = _closure1_slot1;
        var16 = _closure1_slot2;
        var2 = 10;
        var2 = var16[var2];
        var2 = var15.bind(var4)(var2);
        var2 = var2.bind(var4)(var3);
        var12 = var2.textColor;
        var _closure2_slot2 = var12;
        var6 = var2.iconColor;
        var _closure2_slot3 = var6;
        var5 = _closure1_slot3;
        var3 = var5.useMemo;
        var2 = new Array(4);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var12;
        var2[3] = var10;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = _closure2_slot0;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var4 = var2.tier;
                var3 = _closure1_slot7;
                var3 = var3.TIER_3;
                if(!(var4 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var4 = var2.perks;
                _fun0002_ip = 20; continue _fun0002;
case 18:
                var6 = var2.perks;
                var5 = var6.slice;
                var3 = 0;
                var2 = -1;
                var4 = var5.bind(var6)(var3, var2);
case 20:
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var3 = var4.map;
                var2 = function(arg1, arg2) {
                    var11 = arg1;
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var1 = 11;
                    var1 = var12[var1];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var1);
                    var2 = var3.getIconForPerk;
                    var1 = var11.perkIcon;
                    var13 = var2.bind(var3)(var1);
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var10 = _closure2_slot1;
                    var6 = var10.perkRowStyle;
                    var2['style'] = var6;
                    var9 = _closure1_slot10;
                    var6 = {};
                    var14 = _closure2_slot3;
                    var6['color'] = var14;
                    var14 = 'sm';
                    var6['size'] = var14;
                    var9 = var9.bind(var5)(var13, var6);
                    var6 = new Array(2);
                    var6[0] = var9;
                    var9 = _closure1_slot10;
                    var7 = 12;
                    var7 = var12[var7];
                    var7 = var8.bind(var5)(var7);
                    var8 = var7.Text;
                    var7 = {};
                    var12 = _closure2_slot2;
                    var7['color'] = var12;
                    var10 = var10.perkText;
                    var7['style'] = var10;
                    var10 = 'text-sm/medium';
                    var7['variant'] = var10;
                    var10 = var11.getCopy;
                    var10 = var10.bind(var11)();
                    var7['children'] = var10;
                    var7 = var9.bind(var5)(var8, var7);
                    var6[1] = var7;
                    var2['children'] = var6;
                    var9 = _closure2_slot0;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var8 = var1.concat;
                    var7 = 'perk-';
                    var6 = '-';
                    var1 = arg2;
                    var1 = var8.bind(var7)(var9, var6, var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 21:
                return var1;
case 16:
                var1 = new Array(0);
                return var1;
            }
        };
        var6 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot11;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var10.perkRowContainer;
        var1['style'] = var5;
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot10;
        var7 = _closure1_slot4;
        var6 = {};
        var10 = var10.perkRow;
        var6['style'] = var10;
        var11 = _closure1_slot10;
        var13 = _closure1_slot0;
        var9 = 12;
        var9 = var16[var9];
        var9 = var13.bind(var4)(var9);
        var10 = var9.Text;
        var9 = {};
        var9['color'] = var12;
        var12 = 'text-sm/medium';
        var9['variant'] = var12;
        var12 = 13;
        var12 = var16[var12];
        var12 = var13.bind(var4)(var12);
        var14 = var12.intl;
        var13 = var14.string;
        var12 = 14;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.nIj3LZ;
        var12 = var13.bind(var14)(var12);
        var9['children'] = var12;
        var9 = var11.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var13 = 0;
    var8 = var7[var13];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.LevelCardPosition;
    var _closure1_slot5 = var8;
    var5 = var5.PowerupActiveStatusType;
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.BoostedGuildTiers;
    var _closure1_slot7 = var8;
    var5 = var5.HorizontalGradient;
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.TIER_CARDS;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var14 = 6;
    var5 = var7[var14];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'padding': 0, 'overflow': 'hidden'};
    var5['card'] = var10;
    var10 = {};
    var11 = 7;
    var15 = var7[var11];
    var15 = var12.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_24;
    var10['marginVertical'] = var15;
    var15 = 'relative';
    var10['position'] = var15;
    var5['progressContainer'] = var10;
    var10 = {};
    var10['height'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var14;
    var5['progress'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GUILD_BOOSTING_PINK;
    var10['backgroundColor'] = var14;
    var5['progressFull'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['marginStart'] = var14;
    var5['progressStart'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['marginEnd'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderTopEndRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderBottomEndRadius'] = var14;
    var5['progressEnd'] = var10;
    var10 = {'padding': null, 'borderRadius': null, 'position': 'absolute', 'width': 24, 'height': 24, 'top': 4294967287, 'start': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_4;
    var10['padding'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var10['borderRadius'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['start'] = var14;
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INTERACTIVE_MUTED;
    var10['backgroundColor'] = var14;
    var5['boostContainer'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.GUILD_BOOSTING_PINK;
    var10['backgroundColor'] = var14;
    var5['boostContainerActive'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_MOD_SUBTLE;
    var10['backgroundColor'] = var14;
    var5['boostContainerInactive'] = var10;
    var10 = {};
    var14 = var7[var11];
    var14 = var12.bind(var1)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10['padding'] = var14;
    var10['paddingTop'] = var13;
    var5['contentContainer'] = var10;
    var10 = {};
    var13 = 'column';
    var10['flexDirection'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var10['marginTop'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['gap'] = var13;
    var5['perkRowContainer'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['perkRow'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center'};
    var5['perkRowStyle'] = var10;
    var10 = {};
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10['marginStart'] = var13;
    var5['perkText'] = var10;
    var10 = {};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var10['marginTop'] = var11;
    var5['footerContainer'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 20;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/powerups/native/GuildPowerupsLevelCard.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildPowerupsLevelCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var17 = var2.powerup;
            var10 = var2.nextPowerup;
            var19 = var2.index;
            var7 = var2.isScrollingRef;
            var _closure2_slot0 = var7;
            var2 = _closure1_slot12;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 15;
            var2 = var6[var8];
            var2 = var5.bind(var4)(var2);
            var2 = var2.bind(var4)(var3, var17);
            var8 = var6[var8];
            var8 = var5.bind(var4)(var8);
            var8 = var8.bind(var4)(var3, var10);
            var11 = _closure1_slot0;
            var9 = 16;
            var9 = var6[var9];
            var12 = var11.bind(var4)(var9);
            var11 = var12.useCalculatePowerupCardStatus;
            var9 = false;
            var16 = var11.bind(var12)(var17, var2, var9);
            var11 = var2.type;
            var2 = _closure1_slot6;
            var9 = var2.INACTIVE;
            var20 = var11 !== var9;
            var8 = var8.type;
            var2 = var2.INACTIVE;
            var9 = var8 !== var2;
            var2 = 17;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var6 = var2.bind(var4)(var3, var17);
            var _closure2_slot1 = var6;
            var2 = 0;
            if(!(var2 !== var19)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var2 = null;
            if(!(var2 != var10)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var2 = _closure1_slot5;
            var8 = var2.MIDDLE;
            _fun0003_ip = 27; continue _fun0003;
case 25:
            var2 = _closure1_slot5;
            var8 = var2.END;
case 27:
            _fun0003_ip = 28; continue _fun0003;
case 23:
            var2 = _closure1_slot5;
            var8 = var2.START;
case 28:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var7;
            var2[1] = var6;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var2 = var2.current;
                    if(var2) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 29:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 18;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = var15.card;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var1['status'] = var16;
            var7 = _closure1_slot10;
            var6 = _closure1_slot13;
            var5 = {};
            var5['position'] = var8;
            var5['active'] = var20;
            var8 = null;
            var10 = var8 != var10;
            var8 = undefined;
            if(!var10) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var8 = var9;
case 31:
            var5['nextActive'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var15.contentContainer;
            var6['style'] = var9;
            var11 = _closure1_slot10;
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 12;
            var9 = var18[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            var12 = 'heading-lg/semibold';
            var9['variant'] = var12;
            var12 = var17.title;
            var9['children'] = var12;
            var10 = var11.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot14;
            var10 = {};
            var10['isActive'] = var20;
            var10['index'] = var19;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot4;
            var10 = {};
            var15 = var15.footerContainer;
            var10['style'] = var15;
            var15 = _closure1_slot10;
            var13 = 19;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.GuildPowerupsCardFooter;
            var13 = {};
            var17 = var17.cost;
            var13['cost'] = var17;
            var13['status'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['GuildPowerupLevelBody'] = var2;
    return var1;
})();