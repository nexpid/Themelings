// app/modules/devtools/dev_settings/DevSettingsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var12 = 0;
    var2 = var8[var12];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var11 = 1;
    var2 = var8[var11];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var10 = 2;
    var2 = var8[var10];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var6 = 3;
    var2 = var8[var6];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var4 = 4;
    var2 = var8[var4];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var5 = {};
    var5['MESSAGING'] = var12;
    var2 = 'MESSAGING';
    var5[var12] = var2;
    var5['OVERLAYS'] = var11;
    var2 = 'OVERLAYS';
    var5[var11] = var2;
    var5['PREMIUM'] = var10;
    var2 = 'PREMIUM';
    var5[var10] = var2;
    var5['REPORTING'] = var6;
    var2 = 'REPORTING';
    var5[var6] = var2;
    var5['APP_COLLECTIONS'] = var4;
    var2 = 'APP_COLLECTIONS';
    var5[var4] = var2;
    var10 = 5;
    var5['SHOP'] = var10;
    var2 = 'SHOP';
    var5[var10] = var2;
    var6 = 6;
    var5['LIBDISCORE'] = var6;
    var2 = 'LIBDISCORE';
    var5[var6] = var2;
    var4 = {};
    var11 = var5.REPORTING;
    var2 = 'Reporting Toggles';
    var4[var11] = var2;
    var11 = var5.OVERLAYS;
    var2 = 'Dev Overlays';
    var4[var11] = var2;
    var11 = var5.MESSAGING;
    var2 = 'Messaging Toggles';
    var4[var11] = var2;
    var11 = var5.APP_COLLECTIONS;
    var2 = 'App Collections Toggles';
    var4[var11] = var2;
    var11 = var5.PREMIUM;
    var2 = 'Premium Toggles';
    var4[var11] = var2;
    var11 = var5.SHOP;
    var2 = 'Shop Toggles';
    var4[var11] = var2;
    var11 = var5.LIBDISCORE;
    var2 = 'Libdiscore Toggles';
    var4[var11] = var2;
    var2 = {};
    var11 = {};
    var12 = 'Blur view overrides for designers to test with';
    var11['label'] = var12;
    var12 = var5.OVERLAYS;
    var11['category'] = var12;
    var2['visual_effect_view_overrides'] = var11;
    var11 = {};
    var12 = 'Force explicit content obscure blur effect on for message media and embeds';
    var11['label'] = var12;
    var12 = var5.OVERLAYS;
    var11['category'] = var12;
    var2['obscure_blur_effect_explicit_content_enabled'] = var11;
    var11 = {};
    var12 = 'Force gore content obscure blur effect on for message media and embeds';
    var11['label'] = var12;
    var12 = var5.OVERLAYS;
    var11['category'] = var12;
    var2['obscure_blur_effect_gore_content_enabled'] = var11;
    var11 = {};
    var12 = 'Ignore pending scan on explicit media';
    var11['label'] = var12;
    var12 = var5.OVERLAYS;
    var11['category'] = var12;
    var2['explicit_media_redaction_ignore_pending_scan'] = var11;
    var11 = {};
    var12 = 'Uploads: Fail 50% of uploads with 500 status after a 1 second delay';
    var11['label'] = var12;
    var12 = var5.MESSAGING;
    var11['category'] = var12;
    var2['upload_fail_50'] = var11;
    var11 = {};
    var12 = 'Send: Fail with 500 status';
    var11['label'] = var12;
    var12 = var5.MESSAGING;
    var11['category'] = var12;
    var2['send_fail_100'] = var11;
    var11 = {};
    var12 = 'Enable all new premium roadblocks';
    var11['label'] = var12;
    var12 = var5.PREMIUM;
    var11['category'] = var12;
    var2['premium_roadblocks'] = var11;
    var11 = {};
    var12 = 'Enable staff only test iar menu options';
    var11['label'] = var12;
    var12 = var5.REPORTING;
    var11['category'] = var12;
    var2['iar_testing'] = var11;
    var11 = {};
    var12 = 'Enable to skip calling the API to skip submitting actual IAR reports';
    var11['label'] = var12;
    var12 = var5.REPORTING;
    var11['category'] = var12;
    var2['iar_skip_api_report_submit'] = var11;
    var11 = {};
    var12 = "Only show application collections (e.g. in App Directory, App Launcher in text) that have the 'preview' active state. This disables application collections cache, too, so you can see collections updates immediately.";
    var11['label'] = var12;
    var12 = var5.APP_COLLECTIONS;
    var11['category'] = var12;
    var2['only_show_preview_app_collections'] = var11;
    var11 = {};
    var12 = 'Disable application collections cache so that you can see updates to collections immediately.';
    var11['label'] = var12;
    var12 = var5.APP_COLLECTIONS;
    var11['category'] = var12;
    var2['disable_app_collections_cache'] = var11;
    var11 = {};
    var12 = 'Show debug log overlay in collectibles shop';
    var11['label'] = var12;
    var12 = var5.SHOP;
    var11['category'] = var12;
    var2['shop_show_debug_overlay'] = var11;
    var11 = {};
    var12 = 'Bypass Google SKU sync in collectibles shop';
    var11['label'] = var12;
    var12 = var5.SHOP;
    var11['category'] = var12;
    var2['bypass_google_sku_sync'] = var11;
    var11 = {};
    var12 = 'Enable verbose telemetry logging for libdiscore';
    var11['label'] = var12;
    var12 = var5.LIBDISCORE;
    var11['category'] = var12;
    var2['libdiscore_verbose_telemetry_logging'] = var11;
    var _closure1_slot5 = var2;
    var11 = {};
    var _closure1_slot6 = var11;
    var10 = var8[var10];
    var10 = var9.bind(var1)(var10);
    var11 = var10.DeviceSettingsStore;
    var10 = function(arg1) {
        var4 = function DevSettingsStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'getUserAgnosticState';
        var5['key'] = var1;
        var1 = function value() {
            var1 = {};
            var2 = _closure1_slot6;
            var1['toggleStates'] = var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'initialize';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var10 = arg1;
                var8 = _closure1_slot5;
                var1 = undefined;
                var3 = null;
                var2 = undefined;
                for(var4 in var8)
 24:
                {
 33:
                    var14 = var4;
                    var11 = var3 == var10;
                    var12 = undefined;
                    if(var11) { _fun0003_ip = 70; continue _fun0003 }
 45:
                    var13 = var10.toggleStates;
                    var11 = var3 == var13;
                    var2 = var13;
                    var12 = undefined;
                    if(var11) { _fun0003_ip = 70; continue _fun0003 }
 63:
                    var12 = var13[var14];
                    var2 = var13;
 70:
                    var13 = var3 != var12;
                    var11 = var2;
                    if(!var13) { _fun0003_ip = 83; continue _fun0003 }
 80:
                    var13 = var12;
 83:
                    var2 = var11;
                    if(!var13) { _fun0003_ip = 24; continue _fun0003 }
 89:
                    var12 = _closure1_slot6;
                    var12[var14] = var13;
                    var2 = var11;
                    _fun0003_ip = 24; continue _fun0003;
                }
 102:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0004_ip = 26; continue _fun0004 }
 23:
                var1 = var2;
 26:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'enabled';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot6;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'allByCategory';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = global;
            var4 = var2.Object;
            var3 = var4.entries;
            var2 = _closure1_slot5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var4 = arg1;
                    var2 = var4[Symbol.iterator];
                    var4 = var2().next;
                    var1 = var4().value;
                    var1 = var2;
                    var6 = undefined;
                    var3 = var1 === var6;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 49; continue _fun0005 }
 24:
                    var5 = var4().value;
                    var4 = var2;
                    var4 = var4 === var6;
                    var1 = undefined;
                    var3 = var4;
                    if(var4) { _fun0005_ip = 49; continue _fun0005 }
 43:
                    var1 = var5;
                    var3 = var4;
 49:
                    if(var3) { _fun0005_ip = 55; continue _fun0005 }
 52:
                    var2.return();
 55:
                    var2 = var1.category;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var2 = var5().value;
                    var3 = var1;
                    var7 = undefined;
                    var3 = var3 === var7;
                    var4 = undefined;
                    if(var3) { _fun0006_ip = 27; continue _fun0006 }
 24:
                    var4 = var2;
 27:
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 57; continue _fun0006 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var2 = undefined;
                    var3 = var5;
                    if(var5) { _fun0006_ip = 57; continue _fun0006 }
 51:
                    var2 = var6;
                    var3 = var5;
 57:
                    if(var3) { _fun0006_ip = 63; continue _fun0006 }
 60:
                    var1.return();
 63:
                    var1 = new Array(3);
                    var1[0] = var4;
                    var3 = _closure1_slot6;
                    var4 = var3[var4];
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0006_ip = 94; continue _fun0006 }
 91:
                    var3 = var4;
 94:
                    var1[1] = var3;
                    var1[2] = var2;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var10.bind(var1)(var11);
    var11 = 'DevToolsDevSettingsStore';
    var10['displayName'] = var11;
    var10['persistKey'] = var11;
    var6 = var8[var6];
    var15 = var9.bind(var1)(var6);
    var6 = {};
    var7 = function handleSet(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.value;
            var2 = false;
            if(!(var2 === var3)) { _fun0007_ip = 33; continue _fun0007 }
 14:
            var3 = _closure1_slot6;
            var2 = var1.toggle;
            var2 = delete var3[var2];
            _fun0007_ip = 55; continue _fun0007;
 33:
            var3 = _closure1_slot6;
            var2 = var1.toggle;
            var1 = var1.value;
            var3[var2] = var1;
 55:
            var1 = undefined;
            return var1;
        }
    };
    var6['DEV_TOOLS_DEV_SETTING_SET'] = var7;
    var7 = var10.prototype;
    var7 = Object.create(var7, {constructor: {value: var10}});
    var16 = var7;
    var14 = var6;
    var6 = new var16[var10](var15, var14, var13);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 7;
    var8 = var8[var7];
    var7 = native2;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/devtools/dev_settings/DevSettingsStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['DevSettingsCategory'] = var5;
    var3['CATEGORY_LABELS'] = var4;
    var3['toggles'] = var2;
    return var1;
})();