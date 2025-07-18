// app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
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
    var10 = 2;
    var7 = var6[var10];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.SectionList;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.Fragment;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-start', 'height': '100%'};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {'flexGrow': 0, 'marginVertical': 24, 'marginHorizontal': 16};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var11;
    var4['emojiList'] = var9;
    var9 = {'alignItems': 'flex-start', 'paddingTop': 16, 'paddingBottom': 14};
    var4['row'] = var9;
    var9 = {'width': 24, 'height': 24, 'marginBottom': 2};
    var4['emojiImage'] = var9;
    var9 = {};
    var9['marginBottom'] = var10;
    var4['emojiAlias'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionEmojiEditorModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildRoleSubscriptionEmojiEditorModal(arg1) {
        var1 = arg1;
        var3 = var1.guildId;
        var _closure2_slot0 = var3;
        var8 = var1.subscriptionRoleId;
        var _closure2_slot1 = var8;
        var2 = var1.initialTierEmojiIds;
        var13 = var1.listingId;
        var14 = var1.onClose;
        var _closure2_slot2 = var14;
        var1 = var1.onSave;
        var _closure2_slot3 = var1;
        var1 = _closure1_slot12;
        var4 = undefined;
        var11 = var1.bind(var4)();
        var _closure2_slot4 = var11;
        var7 = _closure1_slot1;
        var16 = _closure1_slot2;
        var1 = 8;
        var1 = var16[var1];
        var1 = var7.bind(var4)(var1);
        var10 = var1.bind(var4)(var3);
        var _closure2_slot5 = var10;
        var15 = _closure1_slot0;
        var1 = 9;
        var1 = var16[var1];
        var12 = var15.bind(var4)(var1);
        var5 = var12.useStateFromStores;
        var1 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var1;
        var1 = function() {
            var3 = _closure1_slot8;
            var2 = var3.getSubscriptionRoles;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var12 = var5.bind(var12)(var3, var1);
        var _closure2_slot6 = var12;
        var5 = _closure1_slot5;
        var1 = var5.useState;
        var3 = var1.bind(var5)(var2);
        var2 = _closure1_slot4;
        var1 = 2;
        var3 = var2.bind(var4)(var3, var1);
        var1 = 0;
        var1 = var3[var1];
        var _closure2_slot7 = var1;
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot8 = var2;
        var3 = var5.useMemo;
        var2 = new Array(4);
        var2[0] = var12;
        var2[1] = var10;
        var2[2] = var8;
        var2[3] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure2_slot1;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 83; continue _fun0001 }
 15:
                var4 = _closure2_slot5;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = var2.roles;
                    var2 = var3.filter;
                    var1 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var4 = arg1;
                            var1 = _closure2_slot1;
                            var3 = var4 === var1;
                            if(!var3) { _fun0002_ip = 46; continue _fun0002 }
 17:
                            var6 = _closure2_slot7;
                            var5 = var6.has;
                            var1 = _closure4_slot0;
                            var1 = var1.id;
                            var1 = var5.bind(var6)(var1);
                            var3 = !var1;
 46:
                            var1 = !var3;
                            if(var3) { _fun0002_ip = 66; continue _fun0002 }
 52:
                            var3 = _closure2_slot6;
                            var2 = var3.has;
                            var1 = var2.bind(var3)(var4);
 66:
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.length;
                    var1 = 0;
                    var1 = var1 === var2;
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                var2 = global;
                var3 = var2.Set;
                var2 = var4.map;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var5 = var2.bind(var4)(var1);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
 83:
                var1 = global;
                var1 = var1.Set;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var6 = var2;
                var1 = new var6[var1](var5);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1 = var3.bind(var5)(var1, var2);
        var _closure2_slot9 = var1;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 55; continue _fun0003 }
 7: // try_start_0
                        var5 = _closure2_slot3;
                        var2 = _closure2_slot7;
                        var4 = undefined;
                        var2 = var5.bind(var4)(var2);
                        SaveGenerator(address=29);
 27:
                        return var2;
 29:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0003_ip = 45; continue _fun0003 }
 35:
                        var3 = _closure2_slot2;
                        var3 = var3.bind(var4)();
 43: // try_end0
                        _fun0003_ip = 50; continue _fun0003;
 45:
                        return var2;
 48: // catch_target0
                        CatchBlockStart(arg_register=1);
 50:
                        var2 = undefined;
                        return var2;
 55:
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
        var1 = var1.bind(var4)();
        var _closure2_slot10 = var1;
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var11.container;
        var1['style'] = var5;
        var8 = _closure1_slot9;
        var5 = 12;
        var5 = var16[var5];
        var7 = var7.bind(var4)(var5);
        var5 = {};
        var12 = 13;
        var17 = var16[var12];
        var17 = var15.bind(var4)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var16[var12];
        var17 = var15.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.W4XhnZ;
        var17 = var18.bind(var19)(var17);
        var5['title'] = var17;
        var5['onClose'] = var14;
        var14 = function onSave() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot9;
                var3 = var2.size;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0004_ip = 323; continue _fun0004 }
 21:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var6 = undefined;
                var4 = var7.bind(var6)(var2);
                var3 = var4.show;
                var2 = {};
                var11 = _closure1_slot0;
                var5 = 13;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.30V0t7;
                var9 = var10.bind(var12)(var9);
                var2['title'] = var9;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var13 = var9.intl;
                var12 = var13.formatToPlainString;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var10 = var9.o6j/wM;
                var9 = {};
                var14 = _closure2_slot9;
                var14 = var14.size;
                var9['numberOfEmojiSlatedForDeletion'] = var14;
                var9 = var12.bind(var13)(var10, var9);
                var2['body'] = var9;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var12 = var9.intl;
                var10 = var12.string;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var9 = var9.t;
                var9 = var9.ETE/oK;
                var9 = var10.bind(var12)(var9);
                var2['cancelText'] = var9;
                var9 = var8[var5];
                var9 = var11.bind(var6)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var5 = var8[var5];
                var5 = var11.bind(var6)(var5);
                var5 = var5.t;
                var5 = var5.cY+Ooa;
                var5 = var9.bind(var10)(var5);
                var2['confirmText'] = var5;
                var5 = _closure2_slot10;
                var2['onConfirm'] = var5;
                var5 = 15;
                var5 = var8[var5];
                var5 = var7.bind(var6)(var5);
                var5 = var5.Colors;
                var5 = var5.RED;
                var2['confirmColor'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0004_ip = 333; continue _fun0004;
 323:
                var2 = _closure2_slot10;
                var1 = undefined;
                var1 = var2.bind(var1)();
 333:
                var1 = undefined;
                return var1;
            }
        };
        var5['onSave'] = var14;
        var5['listingId'] = var13;
        var13 = true;
        var5['canSave'] = var13;
        var7 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var7;
        var7 = _closure1_slot7;
        var6 = {};
        var11 = var11.emojiList;
        var6['style'] = var11;
        var11 = function renderItem(arg1) {
            var1 = arg1;
            var16 = var1.item;
            var _closure3_slot0 = var16;
            var3 = _closure2_slot7;
            var2 = var3.has;
            var1 = var16.id;
            var7 = var2.bind(var3)(var1);
            var3 = _closure2_slot9;
            var2 = var3.has;
            var1 = var16.id;
            var1 = var2.bind(var3)(var1);
            var _closure3_slot1 = var1;
            var4 = _closure1_slot9;
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 16;
            var1 = var8[var5];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var2 = var1.FormRow;
            var1 = {};
            var12 = _closure2_slot4;
            var11 = var12.row;
            var1['style'] = var11;
            var14 = _closure1_slot1;
            var10 = 10;
            var10 = var8[var10];
            var11 = var14.bind(var3)(var10);
            var10 = {};
            var12 = var12.emojiImage;
            var10['style'] = var12;
            var12 = {};
            var13 = 11;
            var13 = var8[var13];
            var15 = var14.bind(var3)(var13);
            var14 = var15.getEmojiURL;
            var13 = {};
            var17 = var16.id;
            var13['id'] = var17;
            var16 = var16.animated;
            var13['animated'] = var16;
            var16 = 48;
            var13['size'] = var16;
            var13 = var14.bind(var15)(var13);
            var12['uri'] = var13;
            var10['source'] = var12;
            var10 = var4.bind(var3)(var11, var10);
            var1['leading'] = var10;
            var10 = function label() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = _closure1_slot11;
                    var3 = _closure1_slot10;
                    var2 = {};
                    var8 = _closure1_slot9;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 17;
                    var5 = var5[var1];
                    var1 = undefined;
                    var7 = var6.bind(var1)(var5);
                    var5 = {};
                    var9 = _closure3_slot0;
                    var9 = var9.name;
                    var5['name'] = var9;
                    var9 = _closure2_slot4;
                    var9 = var9.emojiAlias;
                    var5['style'] = var9;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var6 = _closure3_slot1;
                    if(!var6) { _fun0005_ip = 316; continue _fun0005 }
 98:
                    var9 = _closure1_slot11;
                    var8 = _closure1_slot10;
                    var7 = {};
                    var13 = _closure1_slot9;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var11 = 18;
                    var10 = var18[var11];
                    var10 = var17.bind(var1)(var10);
                    var12 = var10.Text;
                    var10 = {'variant': 'text-sm/normal', 'color': 'interactive-active'};
                    var14 = 13;
                    var15 = var18[var14];
                    var15 = var17.bind(var1)(var15);
                    var19 = var15.intl;
                    var16 = var19.string;
                    var15 = var18[var14];
                    var15 = var17.bind(var1)(var15);
                    var15 = var15.t;
                    var15 = var15.1GlN09;
                    var15 = var16.bind(var19)(var15);
                    var10['children'] = var15;
                    var12 = var13.bind(var1)(var12, var10);
                    var10 = new Array(2);
                    var10[0] = var12;
                    var11 = var18[var11];
                    var11 = var17.bind(var1)(var11);
                    var12 = var11.Text;
                    var11 = {'variant': 'text-sm/normal', 'color': 'text-danger'};
                    var15 = var18[var14];
                    var15 = var17.bind(var1)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var14 = var18[var14];
                    var14 = var17.bind(var1)(var14);
                    var14 = var14.t;
                    var14 = var14.J0XdJy;
                    var14 = var15.bind(var16)(var14);
                    var11['children'] = var14;
                    var11 = var13.bind(var1)(var12, var11);
                    var10[1] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 316:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var1['label'] = var10;
            var9 = function onPress() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure3_slot0;
                    var4 = var1.id;
                    var1 = global;
                    var5 = var1.Set;
                    var6 = _closure2_slot7;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {constructor: {value: var5}});
                    var7 = var3;
                    var2 = new var7[var5](var6, var5);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    if(var2) { _fun0006_ip = 72; continue _fun0006 }
 60:
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    _fun0006_ip = 82; continue _fun0006;
 72:
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
 82:
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var9;
            var5 = var8[var5];
            var5 = var6.bind(var3)(var5);
            var5 = var5.FormRow;
            var6 = var5.Checkbox;
            var5 = {};
            var5['selected'] = var7;
            var5 = var4.bind(var3)(var6, var5);
            var1['trailing'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var6['renderItem'] = var11;
        var11 = {};
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.9Oq93t;
        var12 = var13.bind(var14)(var12);
        var11['title'] = var12;
        var11['data'] = var10;
        var10 = new Array(1);
        var10[0] = var11;
        var6['sections'] = var10;
        var9 = function ItemSeparatorComponent() {
            var4 = _closure1_slot9;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FormDivider;
            var1 = {};
            var5 = true;
            var1['iconPush'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var6['ItemSeparatorComponent'] = var9;
        var9 = 'always';
        var6['keyboardShouldPersistTaps'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();