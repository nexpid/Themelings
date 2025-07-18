// app/modules/directory_channels/EventDirectoryActionCreators.tsx
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.DirectoryEntryTypes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var7.bind(var1)(var4);
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 263; continue _fun0001 }
 10:
                    var6 = arg1;
 13: // try_start_0
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var7 = 4;
                    var2 = var8[var7];
                    var5 = undefined;
                    var9 = var4.bind(var5)(var2);
                    var4 = var9.dispatch;
                    var2 = {};
                    var10 = 'EVENT_DIRECTORY_FETCH_START';
                    var2['type'] = var10;
                    var2 = var4.bind(var9)(var2);
                    var4 = _closure1_slot0;
                    var2 = 5;
                    var2 = var8[var2];
                    var2 = var4.bind(var5)(var2);
                    var8 = var2.HTTP;
                    var4 = var8.get;
                    var2 = {};
                    var11 = _closure1_slot5;
                    var10 = var11.DIRECTORY_CHANNEL_ENTRIES;
                    var9 = var6;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = {};
                    var10 = _closure1_slot4;
                    var10 = var10.GUILD_SCHEDULED_EVENT;
                    var9['type'] = var10;
                    var2['query'] = var9;
                    var9 = true;
                    var2['rejectWithError'] = var9;
                    var2 = var4.bind(var8)(var2);
                    SaveGenerator(address=145);
 143:
                    return var2;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 206; continue _fun0001 }
 151:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var7];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'EVENT_DIRECTORY_FETCH_SUCCESS';
                    var3['type'] = var7;
                    var3['channelId'] = var6;
                    var6 = var2.body;
                    var3['entries'] = var6;
                    var3 = var4.bind(var5)(var3);
 204: // try_end0
                    _fun0001_ip = 258; continue _fun0001;
 206:
                    return var2;
 209: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.dispatch;
                    var2 = {};
                    var5 = 'EVENT_DIRECTORY_FETCH_FAILURE';
                    var2['type'] = var5;
                    var2 = var3.bind(var4)(var2);
 258:
                    var2 = undefined;
                    return var2;
 263:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var4.bind(var3)(var2);
        var _closure2_slot0 = var2;
        var1 = function() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = 200;
    var2 = var7.bind(var1)(var4, var2);
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/directory_channels/EventDirectoryActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['fetchDirectoryEntries'] = var2;
    return var1;
})();