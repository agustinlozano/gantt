type JSONBlocksGantt struct {
	Name string `json:"name"`
	Data struct {
		Data []struct {
			Text      string  `json:"text"`
			Duration  float64 `json:"duration"`
			EndDate   string  `json:"end_date"`
			Progress  int     `json:"progress"`
			Parent    int     `json:"parent"`
			Type      string  `json:"type"`
			Open      bool    `json:"open"`
			Block     string  `json:"block"`
			Color     string  `json:"color"`
			Labels    string  `json:"labels"`
			ID        string  `json:"id"`
			StartDate string  `json:"start_date"`
			Num2      string  `json:"2"`
			Num3      string  `json:"3"`
			Num4      string  `json:"4"`
		} `json:"data"`
		Links []struct {
			Source string `json:"source"`
			Target string `json:"target"`
			Type   string `json:"type"`
			Color  string `json:"color"`
			ID     int64  `json:"id"`
		} `json:"links"`
	} `json:"data"`
	Config struct {
		Layout struct {
			CSS  string `json:"css"`
			Rows []struct {
				Cols []struct {
					View    string `json:"view,omitempty"`
					ScrollX string `json:"scrollX,omitempty"`
					ScrollY string `json:"scrollY,omitempty"`
					Resizer bool   `json:"resizer,omitempty"`
					Width   int    `json:"width,omitempty"`
					ID      string `json:"id,omitempty"`
				} `json:"cols,omitempty"`
				View   string `json:"view,omitempty"`
				ID     string `json:"id,omitempty"`
				Height int    `json:"height,omitempty"`
			} `json:"rows"`
			ID string `json:"id"`
		} `json:"layout"`
		Links struct {
			FinishToStart  string `json:"finish_to_start"`
			StartToStart   string `json:"start_to_start"`
			FinishToFinish string `json:"finish_to_finish"`
			StartToFinish  string `json:"start_to_finish"`
		} `json:"links"`
		Types struct {
			Task        string `json:"task"`
			Project     string `json:"project"`
			Milestone   string `json:"milestone"`
			Placeholder string `json:"placeholder"`
		} `json:"types"`
		AutoTypes              bool   `json:"auto_types"`
		DurationUnit           string `json:"duration_unit"`
		WorkTime               bool   `json:"work_time"`
		CorrectWorkTime        bool   `json:"correct_work_time"`
		SkipOffTime            bool   `json:"skip_off_time"`
		CascadeDelete          bool   `json:"cascade_delete"`
		Autosize               bool   `json:"autosize"`
		AutosizeMinWidth       int    `json:"autosize_min_width"`
		Autoscroll             bool   `json:"autoscroll"`
		AutoscrollSpeed        int    `json:"autoscroll_speed"`
		DeepcopyOnParse        bool   `json:"deepcopy_on_parse"`
		ShowLinks              bool   `json:"show_links"`
		ShowTaskCells          bool   `json:"show_task_cells"`
		StaticBackground       bool   `json:"static_background"`
		StaticBackgroundCells  bool   `json:"static_background_cells"`
		BranchLoading          bool   `json:"branch_loading"`
		BranchLoadingProperty  string `json:"branch_loading_property"`
		ShowLoading            bool   `json:"show_loading"`
		ShowChart              bool   `json:"show_chart"`
		ShowGrid               bool   `json:"show_grid"`
		MinDuration            int    `json:"min_duration"`
		DateFormat             string `json:"date_format"`
		StartOnMonday          bool   `json:"start_on_monday"`
		ServerUtc              bool   `json:"server_utc"`
		ShowProgress           bool   `json:"show_progress"`
		FitTasks               bool   `json:"fit_tasks"`
		SelectTask             bool   `json:"select_task"`
		ScrollOnClick          bool   `json:"scroll_on_click"`
		SmartRendering         bool   `json:"smart_rendering"`
		PreserveScroll         bool   `json:"preserve_scroll"`
		Readonly               bool   `json:"readonly"`
		ContainerResizeTimeout int    `json:"container_resize_timeout"`
		DateGrid               string `json:"date_grid"`
		DragLinks              bool   `json:"drag_links"`
		DragProgress           bool   `json:"drag_progress"`
		DragResize             bool   `json:"drag_resize"`
		DragProject            bool   `json:"drag_project"`
		DragMove               bool   `json:"drag_move"`
		DragMode               struct {
			Resize   string `json:"resize"`
			Progress string `json:"progress"`
			Move     string `json:"move"`
			Ignore   string `json:"ignore"`
		} `json:"drag_mode"`
		RoundDndDates    bool `json:"round_dnd_dates"`
		LinkWrapperWidth int  `json:"link_wrapper_width"`
		RootID           int  `json:"root_id"`
		Autofit          bool `json:"autofit"`
		Columns          []struct {
			Name   string `json:"name"`
			Tree   bool   `json:"tree"`
			Width  int    `json:"width"`
			Resize bool   `json:"resize"`
		} `json:"columns"`
		ScaleOffsetMinimal bool `json:"scale_offset_minimal"`
		InheritScaleClass  bool `json:"inherit_scale_class"`
		Scales             []struct {
			Unit string `json:"unit"`
			Step int    `json:"step"`
			Date string `json:"date"`
		} `json:"scales"`
		TimeStep       int      `json:"time_step"`
		DurationStep   int      `json:"duration_step"`
		TaskDate       string   `json:"task_date"`
		TimePicker     string   `json:"time_picker"`
		TaskAttribute  string   `json:"task_attribute"`
		LinkAttribute  string   `json:"link_attribute"`
		LayerAttribute string   `json:"layer_attribute"`
		ButtonsLeft    []string `json:"buttons_left"`
		MigrateButtons struct {
			DhxSaveBtn   string `json:"dhx_save_btn"`
			DhxCancelBtn string `json:"dhx_cancel_btn"`
			DhxDeleteBtn string `json:"dhx_delete_btn"`
		} `json:"_migrate_buttons"`
		ButtonsRight []string `json:"buttons_right"`
		Lightbox     struct {
			Sections []struct {
				Name   string `json:"name"`
				Height int    `json:"height"`
				MapTo  string `json:"map_to"`
				Type   string `json:"type"`
			} `json:"sections"`
			ProjectSections []struct {
				Name     string `json:"name"`
				Height   int    `json:"height,omitempty"`
				MapTo    string `json:"map_to"`
				Type     string `json:"type"`
				Focus    bool   `json:"focus,omitempty"`
				Readonly bool   `json:"readonly,omitempty"`
			} `json:"project_sections"`
			MilestoneSections []struct {
				Name       string `json:"name"`
				Height     int    `json:"height,omitempty"`
				MapTo      string `json:"map_to"`
				Type       string `json:"type"`
				Focus      bool   `json:"focus,omitempty"`
				SingleDate bool   `json:"single_date,omitempty"`
			} `json:"milestone_sections"`
		} `json:"lightbox"`
		DragLightbox                bool   `json:"drag_lightbox"`
		Sort                        bool   `json:"sort"`
		DetailsOnCreate             bool   `json:"details_on_create"`
		DetailsOnDblclick           bool   `json:"details_on_dblclick"`
		InitialScroll               bool   `json:"initial_scroll"`
		TaskScrollOffset            int    `json:"task_scroll_offset"`
		OrderBranch                 bool   `json:"order_branch"`
		OrderBranchFree             bool   `json:"order_branch_free"`
		BarHeight                   string `json:"bar_height"`
		MinColumnWidth              int    `json:"min_column_width"`
		MinGridColumnWidth          int    `json:"min_grid_column_width"`
		GridResizerColumnAttribute  string `json:"grid_resizer_column_attribute"`
		KeepGridWidth               bool   `json:"keep_grid_width"`
		GridResize                  bool   `json:"grid_resize"`
		GridElasticColumns          bool   `json:"grid_elastic_columns"`
		ShowTasksOutsideTimescale   bool   `json:"show_tasks_outside_timescale"`
		ShowUnscheduled             bool   `json:"show_unscheduled"`
		ResizeRows                  bool   `json:"resize_rows"`
		TaskGridRowResizerAttribute string `json:"task_grid_row_resizer_attribute"`
		MinTaskGridRowHeight        int    `json:"min_task_grid_row_height"`
		ReadonlyProperty            string `json:"readonly_property"`
		EditableProperty            string `json:"editable_property"`
		CalendarProperty            string `json:"calendar_property"`
		ResourceCalendars           struct {
		} `json:"resource_calendars"`
		DynamicResourceCalendars bool `json:"dynamic_resource_calendars"`
		InheritCalendar          bool `json:"inherit_calendar"`
		TypeRenderers            struct {
		} `json:"type_renderers"`
		OpenTreeInitially    bool   `json:"open_tree_initially"`
		OptimizeRender       bool   `json:"optimize_render"`
		PreventDefaultScroll bool   `json:"prevent_default_scroll"`
		ShowErrors           bool   `json:"show_errors"`
		WaiAriaAttributes    bool   `json:"wai_aria_attributes"`
		SmartScales          bool   `json:"smart_scales"`
		Rtl                  bool   `json:"rtl"`
		PlaceholderTask      bool   `json:"placeholder_task"`
		HorizontalScrollKey  string `json:"horizontal_scroll_key"`
		DragTimeline         struct {
			Ignore string `json:"ignore"`
		} `json:"drag_timeline"`
		DragMultiple               bool   `json:"drag_multiple"`
		Csp                        string `json:"csp"`
		ResourceProperty           string `json:"resource_property"`
		ResourceStore              string `json:"resource_store"`
		ResourceRenderEmptyCells   bool   `json:"resource_render_empty_cells"`
		ResourceAssignmentStore    string `json:"resource_assignment_store"`
		ProcessResourceAssignments bool   `json:"process_resource_assignments"`
		EditorTypes                struct {
			Text struct {
			} `json:"text"`
			Number struct {
			} `json:"number"`
			Select struct {
			} `json:"select"`
			Date struct {
			} `json:"date"`
			Predecessor struct {
			} `json:"predecessor"`
			Duration struct {
			} `json:"duration"`
		} `json:"editor_types"`
		TouchDrag               int  `json:"touch_drag"`
		Touch                   bool `json:"touch"`
		TouchFeedback           bool `json:"touch_feedback"`
		TouchFeedbackDuration   int  `json:"touch_feedback_duration"`
		KeyboardNavigation      bool `json:"keyboard_navigation"`
		KeyboardNavigationCells bool `json:"keyboard_navigation_cells"`
		TooltipTimeout          int  `json:"tooltip_timeout"`
		TooltipOffsetY          int  `json:"tooltip_offset_y"`
		TooltipOffsetX          int  `json:"tooltip_offset_x"`
		TooltipHideTimeout      int  `json:"tooltip_hide_timeout"`
		Multiselect             bool `json:"multiselect"`
		MultiselectOneLevel     bool `json:"multiselect_one_level"`
		Worktimes               struct {
			Global struct {
				Hours []int `json:"hours"`
				Dates struct {
					Num0 bool `json:"0"`
					Num1 bool `json:"1"`
					Num2 bool `json:"2"`
					Num3 bool `json:"3"`
					Num4 bool `json:"4"`
					Num5 bool `json:"5"`
					Num6 bool `json:"6"`
				} `json:"dates"`
				Parsed struct {
					Dates struct {
						Num0 bool `json:"0"`
						Num1 bool `json:"1"`
						Num2 bool `json:"2"`
						Num3 bool `json:"3"`
						Num4 bool `json:"4"`
						Num5 bool `json:"5"`
						Num6 bool `json:"6"`
					} `json:"dates"`
					Hours []struct {
						Start           int `json:"start"`
						End             int `json:"end"`
						StartHour       int `json:"startHour"`
						StartMinute     int `json:"startMinute"`
						EndHour         int `json:"endHour"`
						EndMinute       int `json:"endMinute"`
						DurationSeconds int `json:"durationSeconds"`
						DurationMinutes int `json:"durationMinutes"`
						DurationHours   int `json:"durationHours"`
					} `json:"hours"`
					HaveCustomWeeks bool `json:"haveCustomWeeks"`
					CustomWeeks     struct {
					} `json:"customWeeks"`
					CustomWeeksRangeStart interface{}   `json:"customWeeksRangeStart"`
					CustomWeeksRangeEnd   interface{}   `json:"customWeeksRangeEnd"`
					CustomWeeksBoundaries []interface{} `json:"customWeeksBoundaries"`
				} `json:"parsed"`
			} `json:"global"`
			Fulltime struct {
				Hours []int `json:"hours"`
				Dates struct {
					Num0 bool `json:"0"`
					Num1 bool `json:"1"`
					Num2 bool `json:"2"`
					Num3 bool `json:"3"`
					Num4 bool `json:"4"`
					Num5 bool `json:"5"`
					Num6 bool `json:"6"`
				} `json:"dates"`
				Parsed struct {
					Dates struct {
						Num0 bool `json:"0"`
						Num1 bool `json:"1"`
						Num2 bool `json:"2"`
						Num3 bool `json:"3"`
						Num4 bool `json:"4"`
						Num5 bool `json:"5"`
						Num6 bool `json:"6"`
					} `json:"dates"`
					Hours []struct {
						Start           int `json:"start"`
						End             int `json:"end"`
						StartHour       int `json:"startHour"`
						StartMinute     int `json:"startMinute"`
						EndHour         int `json:"endHour"`
						EndMinute       int `json:"endMinute"`
						DurationSeconds int `json:"durationSeconds"`
						DurationMinutes int `json:"durationMinutes"`
						DurationHours   int `json:"durationHours"`
					} `json:"hours"`
					HaveCustomWeeks bool `json:"haveCustomWeeks"`
					CustomWeeks     struct {
					} `json:"customWeeks"`
					CustomWeeksRangeStart interface{}   `json:"customWeeksRangeStart"`
					CustomWeeksRangeEnd   interface{}   `json:"customWeeksRangeEnd"`
					CustomWeeksBoundaries []interface{} `json:"customWeeksBoundaries"`
				} `json:"parsed"`
			} `json:"fulltime"`
		} `json:"worktimes"`
		ScrollSize               int `json:"scroll_size"`
		GridWidth                int `json:"grid_width"`
		RowHeight                int `json:"row_height"`
		ScaleHeight              int `json:"scale_height"`
		LinkLineWidth            int `json:"link_line_width"`
		LinkArrowSize            int `json:"link_arrow_size"`
		LightboxAdditionalHeight int `json:"lightbox_additional_height"`
	} `json:"config"`
	Columns []struct {
		ID     string `json:"id"`
		Header string `json:"header"`
		Width  int    `json:"width"`
	} `json:"columns"`
	Worktime struct {
		Hours   []int       `json:"hours"`
		Minutes interface{} `json:"minutes"`
		Dates   struct {
			Num0 bool `json:"0"`
			Num1 bool `json:"1"`
			Num2 bool `json:"2"`
			Num3 bool `json:"3"`
			Num4 bool `json:"4"`
			Num5 bool `json:"5"`
			Num6 bool `json:"6"`
		} `json:"dates"`
	} `json:"worktime"`
	Version string      `json:"version"`
	Upload  interface{} `json:"upload"`
}